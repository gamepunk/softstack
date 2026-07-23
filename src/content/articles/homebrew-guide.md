---
title: How to Install Mac Apps with Homebrew
description: Learn how to use Homebrew Cask to install, update, and manage GUI applications from the command line.
date: 2026-07-20
category: guide
tags: [homebrew, mac, terminal, package-manager]
---

## What is Homebrew?

Homebrew is the missing package manager for macOS. While its main `brew install` command handles command-line tools and libraries, **Homebrew Cask** extends it to GUI applications — browsers, editors, media players, and everything in between.

## Installing Homebrew

Open Terminal and run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the prompts. Once done, verify:

```bash
brew --version
```

## Installing GUI Apps with Cask

The syntax is simple:

```bash
brew install --cask <app-name>
```

Examples:

```bash
brew install --cask firefox
brew install --cask visual-studio-code
brew install --cask vlc
```

## Useful Commands

| Command | What it does |
|---------|-------------|
| `brew search --cask <keyword>` | Search for apps |
| `brew info --cask <app>` | Show app details |
| `brew upgrade --cask` | Update all casks |
| `brew list --cask` | List installed casks |
| `brew uninstall --cask <app>` | Remove an app |

## Why Use Homebrew?

- **One command to install.** No hunting for download pages.
- **Bulk updates.** `brew upgrade --cask` updates everything at once.
- **Scriptable.** Perfect for setting up new machines.
- **Community-maintained.** Thousands of apps, regularly updated.
