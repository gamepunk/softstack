---
title: HandBrake Guide — Convert Any Video to Any Format
description: Use HandBrake to transcode videos for any device. Presets make it easy; advanced controls make it powerful.
date: 2026-06-24
category: tutorial
tags: [handbrake, video, conversion, transcoding]
---

HandBrake is the open-source video transcoder. Convert between virtually every format and codec with built-in presets.

<!-- app:handbrake -->

## Installation

```bash
brew install --cask handbrake
```

## Quick Conversion

1. Open HandBrake, drag in a video file
2. Choose a preset from the right panel (e.g., "Fast 1080p30")
3. Click "Start Encode"

That's it. The preset handles all the settings. For most people, this is all they'll ever need.

## Understanding Presets

HandBrake ships with presets for every common target:
- **General** — Balanced quality/size
- **Web** — Optimized for streaming
- **Devices** — Apple, Android, Chromecast
- **Matroska** — MKV container (preserves subtitles, chapters)

## When to Tweak Settings

- **RF (Quality) slider**: Lower number = better quality, bigger file. 20-23 is the sweet spot for 1080p.
- **Encoder**: H.265 (x265) gives smaller files but is slower. H.264 (x264) is faster and more compatible.
- **Audio**: AAC at 160kbps is good for stereo. Pass through AC3/DTS if you want surround sound.

## Batch Processing

Add multiple files to the queue (Add to Queue button). Set the same preset for all, then hit Start. Walk away — HandBrake will process them all.
