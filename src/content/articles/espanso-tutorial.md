---
title: Espanso — Type Less, Say More with Text Expansion
description: Configure Espanso to expand shortcuts into full text. Email templates, code snippets, and more.
date: 2026-05-21
category: tutorial
tags: [espanso, text-expansion, productivity, automation]
---

Espanso turns short triggers into full text. Type `:email` and it expands to your email address. Here's how.

<!-- app:espanso -->

## Installation

```bash
# macOS
brew install --cask espanso

# Windows
winget install Espanso.Espanso

# Linux
sudo snap install espanso
```

Start the service: `espanso start`. Enable auto-start: `espanso service register`.

## Your First Match

Configuration lives in `~/.config/espanso/match/base.yml` (Linux/Mac) or `%APPDATA%/espanso/match/base.yml` (Windows). Add:

```yaml
matches:
  - trigger: ":email"
    replace: "yourname@example.com"

  - trigger: ":sig"
    replace: |
      Best regards,
      Your Name
      Software Developer

  - trigger: ":date"
    replace: "{{mydate}}"
    vars:
      - name: mydate
        type: date
        params:
          format: "%Y-%m-%d"
```

## Dynamic Matches

```yaml
# Shell command output
- trigger: ":ip"
  replace: "{{output}}"
  vars:
    - name: output
      type: shell
      params:
        cmd: "curl -s ifconfig.me"

# Clipboard content
- trigger: ":clip"
  replace: "{{clipboard}}"
```

## Package Ecosystem

Espanso has community packages: `espanso install basic-emojis`. Type `:smile` for 😊. Browse packages at hub.espanso.org.

## Tips

- Prefix triggers with `:` or `;` to avoid accidental expansion
- Keep a cheatsheet of your triggers until muscle memory kicks in
- Sync your `match/` folder via Dropbox/Syncthing to share expansions across machines
