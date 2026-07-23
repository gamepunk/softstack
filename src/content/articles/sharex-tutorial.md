---
title: ShareX — The Ultimate Screenshot and Screen Recording Tool for Windows
description: Master ShareX for screenshots, GIFs, screen recording, OCR, and automatic uploads.
date: 2026-05-06
category: tutorial
tags: [sharex, screenshot, screen-recording, windows]
---

ShareX is the free, open-source screen capture tool that does everything. Here's how to set it up for maximum efficiency.

<!-- app:sharex -->

## First Setup

After installing, open ShareX. It lives in the system tray. Right-click the icon for the main menu. Go to Hotkey Settings to configure your shortcuts.

## Capture Modes

ShareX has more capture modes than any other tool:

- **Print Screen** — Capture region (drag to select)
- **Ctrl+Print Screen** — Full screen
- **Alt+Print Screen** — Active window
- **Ctrl+Shift+Print Screen** — Scrolling capture (entire webpage or document)

After capture, the editor opens with annotation tools: arrows, text, shapes, blur, and step numbers.

## After-Capture Tasks

In Task Settings, configure what happens after each capture:

- Open in image editor (default)
- Copy to clipboard
- Save to file
- Upload to hosting service

Enable "Copy to clipboard" for quick sharing. Enable "Save to file" with a pattern like `%y-%mo-%d_%h-%mi-%s` for organized filenames.

## Screen Recording

ShareX records screen to GIF or MP4. In the main menu: Capture → Screen Recording. Choose region, start recording. GIFs are great for short demos; MP4 for longer recordings.

Install FFmpeg (Tools → FFmpeg → Download) for MP4 recording support.

## OCR

After capturing text on screen, ShareX can extract it via OCR. Right-click tray icon → Capture → OCR. The text is copied to your clipboard. Requires a language data download on first use.

## Upload Destinations

Destinations → Destination Settings. Configure automatic uploads to Imgur, Dropbox, Google Drive, FTP, or custom URLs. After capture, the URL is automatically copied to your clipboard.
