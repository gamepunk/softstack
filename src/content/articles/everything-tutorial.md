---
title: Everything by voidtools — Master Windows File Search
description: Find any file on your drives instantly with Everything. Learn advanced search syntax and workflows.
date: 2026-05-05
category: tutorial
tags: [everything, windows, search, file-management]
---

Everything indexes your entire file system and returns results as you type. No waiting, no progress bars. Here's how to master it.

<!-- app:everything -->

## Installation

Download the portable version from voidtools.com — no installation needed. Run it once after boot (or set it to auto-start). Initial indexing takes seconds.

## Basic Search

Type any part of a filename and results appear instantly. Everything searches all NTFS drives by default. To search specific locations, go to Tools → Options → Indexes → Folders.

## Advanced Search Syntax

| Search | Finds |
|--------|-------|
| `*.pdf` | All PDFs |
| `invoice*.pdf` | PDFs starting with "invoice" |
| `size:>1gb` | Files over 1GB |
| `size:100mb..500mb` | Files between 100-500MB |
| `ext:mp3;flac` | MP3 and FLAC files |
| `dm:today` | Files modified today |
| `dc:thisweek` | Files created this week |
| `folder: backup !size:0` | Non-empty backup folders |

## Boolean Operators

- `invoice | receipt` — Either term (OR)
- `invoice receipt` — Both terms (AND)
- `!temp` — Exclude files with "temp"

## Workflow: Find and Delete Large Files

```
ext:mp4 size:>500mb
```
Select all, right-click → Delete. Or use Everything's built-in duplicate finder: Tools → Find Duplicates.

## Integration

- Enable **Tools → Options → General → Show Search Everything folder context menu item**
- Right-click any folder in Explorer to search within it with Everything
- Everything runs an HTTP server on localhost — search from any browser
