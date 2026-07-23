#!/usr/bin/env bun
// Sync content from brew cask + flatpak
// Usage: bun scripts/sync.mjs
import { readFileSync, writeFileSync, readdirSync } from 'fs';

const BASE = new URL('../src/content/software', import.meta.url).pathname;
const CASKS = JSON.parse(readFileSync(new URL('cask.json', import.meta.url).pathname, 'utf8'));
const FLATPAK = JSON.parse(readFileSync(new URL('flatpak.json', import.meta.url).pathname, 'utf8'));
const files = readdirSync(BASE).filter(f => f.endsWith('.md'));

// Build cask lookup
const caskMap = new Map();
for (const c of CASKS) {
  if (c.tap === 'homebrew/cask' && !c.disabled && !c.deprecated)
    caskMap.set(c.token, c);
}

// Build flatpak name → ID index
const fpByName = new Map();
for (const [id, info] of Object.entries(FLATPAK)) {
  const n = info.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!fpByName.has(n)) fpByName.set(n, []);
  fpByName.get(n).push(id);
}

console.log(`${caskMap.size} casks | ${Object.keys(FLATPAK).length} flatpaks`);

let stats = { tag:0, url:0, ver:0, dl:0, fp:0, total:0 };

for (const file of files) {
  const token = file.replace('.md', '');
  const cask = caskMap.get(token);
  let content = readFileSync(`${BASE}/${file}`, 'utf8');
  let changed = false;

  // ── Brew cask updates ──
  if (cask) {
    // Tagline
    const curTag = content.match(/^tagline:\s*(.+)$/m)?.[1];
    if (cask.desc && curTag?.includes('— a free GUI app')) {
      content = content.replace(/^tagline:\s*.+$/m, `tagline: ${cask.desc}`);
      changed = true; stats.tag++;
    }
    // Website
    const curSite = content.match(/^website:\s*(.+)$/m)?.[1];
    if (cask.homepage && curSite) {
      const norm = (s) => s?.replace(/\/$/, '').replace(/^https?:/, '');
      if (norm(cask.homepage) !== norm(curSite)) {
        content = content.replace(/^website:\s*.+$/m, `website: ${cask.homepage}`);
        changed = true; stats.url++;
      }
    }
    // Version
    if (cask.version && !cask.version.includes('latest') && !cask.version.includes(':')) {
      const curVer = content.match(/^version:\s*"?(.+?)"?\s*$/m)?.[1];
      if (curVer !== cask.version) {
        if (curVer) content = content.replace(/^version:\s*".+"\s*$/m, `version: "${cask.version}"`);
        else content = content.replace(/^(featured: .+)$/m, `version: "${cask.version}"\n$1`);
        changed = true; stats.ver++;
      }
    }
    // Download URL
    if (cask.url && !cask.url.includes('#{') && !content.includes('\ndownload:')) {
      content = content.replace(/^(featured: .+)$/m, `download: ${cask.url}\n$1`);
      changed = true; stats.dl++;
    }
  }

  // ── Flatpak install ──
  if (cask && !content.includes('flatpak:')) {
    const nameMatch = content.match(/^name:\s*(.+)$/m)?.[1];
    if (nameMatch) {
      const normName = nameMatch.toLowerCase().replace(/[^a-z0-9]/g, '');
      const matches = fpByName.get(normName);
      if (matches && matches.length > 0) {
        const cmd = `flatpak install flathub ${matches[0]}`;
        if (content.includes('install:')) {
          content = content.replace(/(  homebrew: .+\n)/, `$1  flatpak: ${cmd}\n`);
        } else {
          content = content.replace(/^(featured: .+)$/m, `install:\n  homebrew: brew install --cask ${token}\n  flatpak: ${cmd}\n$1`);
        }
        changed = true; stats.fp++;
      }
    }
  }

  if (changed) {
    writeFileSync(`${BASE}/${file}`, content);
    stats.total++;
  }
}

console.log(`Updated ${stats.total} files | tag:${stats.tag} url:${stats.url} ver:${stats.ver} dl:${stats.dl} fp:${stats.fp}`);
