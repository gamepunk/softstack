---
title: Notepad++ — The Power User's Text Editor for Windows
description: Syntax highlighting, macros, plugins, and advanced search. Master Notepad++ for coding and text editing.
date: 2026-05-08
category: tutorial
tags: [notepad++, text-editor, windows, developer]
---

Notepad++ is fast, lightweight, and free. Here's how to use its best features.

<!-- app:notepad-plus-plus -->

## Essential Features

- **Syntax highlighting** — Auto-detected for 80+ languages. Change via Language menu
- **Multi-tab editing** — Open dozens of files, drag tabs to reorder
- **Split view** — Right-click a tab → Clone to Other View for side-by-side editing
- **Column mode** — Alt+drag to select a rectangular block of text
- **Bookmarks** — Ctrl+F2 to toggle, F2/Shift+F2 to jump between them

## Search and Replace

Ctrl+F opens the find dialog. The real power is in the Replace tab (Ctrl+H):

- **Regular expressions** — Check "Regular expression" mode
- **Search in files** — Find across entire folders
- **Mark tab** — Highlight all occurrences in the document

Regex examples:
- `\b\w+@\w+\.\w+\b` — Find email addresses
- `^\s*$` — Find empty lines
- `(.+)\n(.+)` — Swap two consecutive lines

## Macros

Macro → Start Recording. Perform your actions. Macro → Stop Recording. Macro → Save Current Recorded Macro and assign a hotkey. Replay with Macro → Playback or your assigned shortcut.

Example: record a macro to wrap selected text in `<strong>` tags. Save it as Ctrl+Shift+B.

## Plugins

Plugins → Plugins Admin. Essential plugins:

- **Compare** — Diff two files side by side
- **Explorer** — File browser sidebar
- **NppFTP** — Edit files directly on remote servers
- **XML Tools** — Pretty print, validate, and transform XML

## Settings

Settings → Preferences → New Document: set default encoding to UTF-8. Enable "Remember current session" to restore all open files on relaunch.
