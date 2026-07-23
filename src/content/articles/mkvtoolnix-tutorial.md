---
title: MKVToolNix — Merge, Split, and Edit MKV Files Like a Pro
description: Combine video, audio, and subtitle tracks into MKV. Extract tracks and edit metadata with MKVToolNix.
date: 2026-06-03
category: tutorial
tags: [mkvtoolnix, mkv, video, media]
---

MKVToolNix is the essential toolkit for working with Matroska (MKV) video files.

<!-- app:mkvtoolnix -->

## Merging Files

Open MKVToolNix GUI. Drag your video file, audio tracks, and subtitle files into the "Input files" area. Each track appears in the "Tracks, chapters and tags" list. Check/uncheck tracks to include or exclude. Set language and track name for each. Click "Start multiplexing" at the bottom to create the MKV.

## Extracting Tracks

Need just the audio from an MKV? Add the file, uncheck everything except the audio track you want. Under "Output" tab, change the file extension (e.g., `.mka` for audio-only MKV). Multiplex. You now have a standalone audio file.

## Splitting by Duration or Chapters

Output → Splitting → "After output duration." Enter a time like `00:30:00` to split the video into 30-minute segments. Or choose "After specific chapters" and enter `3,6,9` to split at those chapter markers.

## Editing Headers

File → Header Editor. Drag an MKV file. Edit track names, languages, default/forced flags, and aspect ratio without remuxing. Fix files where the language is listed as "und" (undefined) by setting the correct language code.

## Adding Chapters

Chapter Editor → New Chapter File. Add chapter entries with timestamps and names. Save as XML. Then in the Multiplexer, add the chapter file in the "Output" tab under "Chapters."
