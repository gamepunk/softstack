---
title: SumatraPDF — The Fastest PDF Reader for Windows
description: Keyboard shortcuts, advanced search, and customization with SumatraPDF.
date: 2026-05-17
category: tutorial
tags: [sumatrapdf, pdf, ebook, windows]
---

SumatraPDF is tiny, fast, and opens PDFs, ePubs, MOBIs, comics, and more.

<!-- app:sumatrapdf -->

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| J/K | Previous/Next page |
| G | Go to page |
| Q | Quit |
| Ctrl+F | Search |
| F3/Shift+F3 | Next/Previous search result |
| Ctrl+6 | Toggle bookmarks sidebar |
| Ctrl+L | Toggle fullscreen |
| F12 | Show/hide toolbar |
| +/- | Zoom in/out |
| Ctrl+0 | Fit page |
| Ctrl+1 | Actual size |

## Advanced Search

Ctrl+F opens the find bar. Type your search term. Results highlight on the page. F3 and Shift+F3 cycle through matches. Click the search icon to list all results in a panel.

## View Modes

View menu:
- **Single Page** — One page at a time
- **Facing** — Two pages side by side (like an open book)
- **Book View** — Facing, with first page alone
- **Presentation** — Fullscreen with each page filling the screen

## Settings

Settings → Advanced Options opens a text file. Key options:

```
FixedPageUI [
  TextColor = #000000
  BackgroundColor = #ffffff
]
EbookUI [
  FontName = Georgia
  FontSize = 12
]
```

Change TextColor and BackgroundColor for a dark mode (e.g., `#cccccc` on `#222222`).

## Portable Use

SumatraPDF is a single executable. Put it on a USB drive and run it anywhere. Settings are stored in a text file next to the executable. No installation, no registry entries.
