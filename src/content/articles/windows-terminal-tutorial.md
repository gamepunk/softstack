---
title: Windows Terminal Power User Guide — Tabs, Panes, and Themes
description: Supercharge your Windows command line with tabs, split panes, custom themes, and profiles.
date: 2026-05-04
category: tutorial
tags: [windows-terminal, cli, developer, customization]
---

Windows Terminal is Microsoft's modern terminal that hosts Command Prompt, PowerShell, WSL, and more. Here's how to become a power user.

<!-- app:windows-terminal -->

## Basic Navigation

- **Ctrl+Shift+T** — New tab
- **Ctrl+Shift+D** — Duplicate current tab
- **Ctrl+Shift+W** — Close tab
- **Alt+Shift+D** — Split pane vertically
- **Alt+Shift+-** — Split pane horizontally
- **Alt+Arrow** — Move between panes
- **Alt+Shift+Arrow** — Resize pane

## Open Settings

Ctrl+, opens the settings UI. You can edit in the GUI or open the JSON file directly. The GUI is fine for most customizations. Go to Profiles → Defaults for settings that apply to all profiles.

## Custom Theme

In settings, add a new color scheme:

```json
{
  "name": "Dracula",
  "background": "#282a36",
  "foreground": "#f8f8f2",
  "black": "#21222c",
  "red": "#ff5555",
  "green": "#50fa7b",
  "yellow": "#f1fa8c",
  "blue": "#bd93f9",
  "purple": "#ff79c6",
  "cyan": "#8be9fd",
  "white": "#f8f8f2"
}
```

Assign it to a profile under Appearance → Color scheme.

## Oh My Posh

Install Oh My Posh for a beautiful prompt:

```bash
winget install JanDeDobbeleer.OhMyPosh
```

Add to your PowerShell profile (`$PROFILE`):

```powershell
oh-my-posh init pwsh | Invoke-Expression
```

Choose a theme: `oh-my-posh init pwsh --config ~/theme.json | Invoke-Expression`. Get themes from ohmyposh.dev.

## Profile Configuration

Create custom profiles for SSH servers. In settings → Add new profile:

```json
{
  "name": "My Server",
  "commandline": "ssh user@myserver.com",
  "icon": "🖥️"
}
```

This creates a dedicated entry in the dropdown menu that opens an SSH session with one click.
