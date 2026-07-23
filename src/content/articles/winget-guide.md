---
title: How to Install Windows Apps with winget
description: Learn to use Microsoft's built-in package manager to install, update, and manage applications from the command line.
date: 2026-07-19
category: guide
tags: [winget, windows, package-manager, terminal]
---

winget is Microsoft's official package manager for Windows 10 and 11. It lets you install, update, and manage applications from the command line — no more hunting for download pages or clicking through installers.

## Is winget Already Installed?

Open PowerShell or Command Prompt and type:

```bash
winget --version
```

If you see a version number, you're good. If not, install the App Installer from the Microsoft Store.

## Installing Apps

The basic syntax:

```bash
winget install <package-id>
```

Examples:

```bash
winget install Mozilla.Firefox
winget install VideoLAN.VLC
winget install Microsoft.VisualStudioCode
winget install Discord.Discord
```

## Searching for Apps

```bash
winget search <keyword>
```

This returns a list of matching packages with their IDs, versions, and sources.

## Useful Commands

| Command | What it does |
|---------|-------------|
| `winget search <term>` | Find packages |
| `winget show <id>` | View package details |
| `winget install <id>` | Install a package |
| `winget upgrade` | List available updates |
| `winget upgrade --all` | Update everything |
| `winget list` | Show installed packages |
| `winget uninstall <id>` | Remove a package |

## Export and Restore

Need to set up a new machine? Export your installed apps:

```bash
winget export -o apps.json
```

On the new machine, restore:

```bash
winget import -i apps.json
```

## Why Use winget?

- **Built into Windows.** No third-party tool to install first.
- **Silent installs.** No clicking through installers.
- **One command to update everything.** `winget upgrade --all` updates all your apps.
- **Scriptable.** Perfect for setting up new machines or team environments.
