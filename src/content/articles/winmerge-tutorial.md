---
title: WinMerge — Compare and Merge Files and Folders on Windows
description: Visual diff tool for text files and directories. Essential for code reviews and configuration management.
date: 2026-06-10
category: tutorial
tags: [winmerge, diff, merge, developer]
---

WinMerge shows exactly what changed between two files or folders.

<!-- app:winmerge -->

## File Comparison

File → Open. Select left and right files. Differences are highlighted by color: yellow for changed lines, red for deleted, green for added. The location pane on the left shows a mini-map of all differences.

Click the arrow buttons in the diff gutter to merge individual changes from one side to the other. Copy to right copies the left version; copy to left does the reverse.

## Folder Comparison

File → Open → select two folders. WinMerge lists all files color-coded: identical (white), different (yellow), only on left (red), only on right (green). Double-click any file to see the detailed diff. Right-click → "Copy to Right" or "Copy to Left" to sync individual files.

## Filters

Tools → Filters. Create file masks to include or exclude certain patterns. Common filters: exclude `node_modules/`, `*.min.js`, `.git/`. Apply generation filters to ignore line-ending differences or whitespace changes.

## Keyboard Shortcuts

- **Alt+↓** — Next difference
- **Alt+↑** — Previous difference
- **Alt+←** — Copy left to right
- **Alt+→** — Copy right to left
- **F5** — Refresh comparison
- **Ctrl+W** — Close
