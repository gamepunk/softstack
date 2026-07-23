---
title: Flameshot — Screenshot Like a Pro on Any Platform
description: Capture, annotate, blur, and upload screenshots with Flameshot. The ultimate free screenshot tool.
date: 2026-05-11
category: tutorial
tags: [flameshot, screenshot, annotation, cross-platform]
---

Flameshot is the screenshot tool with a built-in annotation editor that works on Linux, macOS, and Windows.

<!-- app:flameshot -->

## Installation

```bash
# macOS
brew install --cask flameshot

# Windows
winget install Flameshot.Flameshot

# Linux
sudo apt install flameshot
```

## Quick Start

Launch Flameshot (it lives in the system tray). Press your configured hotkey (default: Print Screen on Linux, but you need to set it manually on Mac/Windows). Select a region to capture.

## The Annotation Toolbar

After selecting a region, a toolbar appears:

- **Arrow (A)** — Draw arrows. Change color on the left panel
- **Rectangle (R)** — Draw boxes. Hold Shift for squares
- **Circle (C)** — Draw ellipses. Hold Shift for circles
- **Marker (M)** — Freehand drawing
- **Text (T)** — Add text with customizable font size
- **Blur (B)** — Blur sensitive information. Adjust blur radius
- **Pixelate** — Pixelate instead of blur

The left panel changes color, thickness, and font size for the selected tool.

## Upload Directly

Click the upload button (cloud icon). Configure upload destinations in the configuration menu. Imgur is built-in — configure an API key for direct uploads. The URL is automatically copied to your clipboard.

## Shortcuts

While annotating:
- **Ctrl+Z** — Undo last annotation
- **Ctrl+S** — Save to file
- **Ctrl+C** — Copy to clipboard
- **Right-click** — Show color picker
- **Mouse wheel** — Change tool thickness

## Configuration

Right-click the tray icon → Configuration. Set your preferred save path, auto-save on capture, and customize the interface colors. The "General" tab lets you launch Flameshot on startup.
