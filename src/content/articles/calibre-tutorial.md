---
title: Calibre — The Ultimate Ebook Manager
description: Organize, convert, and sync your ebook library. Calibre handles every format and every device.
date: 2026-06-17
category: tutorial
tags: [calibre, ebooks, reading, kindle]
---

Calibre is the Swiss Army knife of ebooks. It manages your library, converts between every format, and syncs to any device.

<!-- app:calibre -->

## Installation

```bash
brew install --cask calibre
```

## Adding Books

Drag and drop ebook files into Calibre. It auto-detects metadata (title, author, cover) and can fetch missing info from online sources. Right-click → Edit metadata → Download metadata and covers.

## Converting Formats

Select a book, click "Convert books." Choose the output format:

- **EPUB** — Universal, works on most e-readers
- **MOBI** — Older Kindles
- **AZW3** — Modern Kindles
- **PDF** — Fixed layout

For Kindle, AZW3 preserves more formatting than MOBI. For everything else, EPUB.

## Syncing to Your Device

Plug in your Kindle or e-reader via USB. Calibre detects it and shows a "Send to device" button. It can auto-convert to the right format during transfer.

## Content Server

Turn on "Connect/Share → Start Content server" to access your library from any device on your network. Open the URL in a browser or a reader app on your phone.

## News Downloads

Calibre can fetch news from websites and deliver them as ebooks. Click "Fetch news," choose a source, and schedule automatic downloads.
