---
title: Flow Launcher — Spotlight Search for Windows
description: Launch apps, search files, calculate, and control your system — all from the keyboard.
date: 2026-05-27
category: tutorial
tags: [flow-launcher, windows, launcher, productivity]
---

Flow Launcher brings Mac-like Spotlight search to Windows. Here's how to make it your command center.

<!-- app:flow-launcher -->

## Setup

Install via winget: `winget install FlowLauncher.FlowLauncher`. Default shortcut: Alt+Space. It appears as a floating search bar.

## Basic Commands

Type to find apps and files. Press Enter to open. Beyond search, Flow Launcher is a command line:

- `> 15*3` → Calculator. Shows result as you type
- `wiki Albert Einstein` → Search Wikipedia
- `g how to center a div` → Google search
- `yt lofi hip hop` → Search YouTube
- `color red` → Color picker
- `shell ping google.com` → Run shell commands

## Essential Plugins

Right-click Flow Launcher icon → Plugin Store:
- **Calculator** — Mathematical expressions
- **Shell** — Run cmd/PowerShell commands directly
- **Explorer** — Navigate and open folders
- **Browser Bookmarks** — Search your Chrome/Firefox bookmarks
- **Clipboard History** — Search through your copy history
- **Todoist** — Add and view tasks
- **Window Walker** — Switch between open windows by name

## Custom Shortcuts

Settings → Hotkeys. Add custom keywords. Example: create a hotkey for `code` to open a specific folder in VS Code:

Add a custom plugin with action "Start Process," program `code`, argument `C:\Projects`.

## Tips

- Type `?` to see all available plugins and their shortcuts
- Pin to taskbar and hide the system tray icon for a cleaner look
- The search is instant — start typing before Flow Launcher fully opens
