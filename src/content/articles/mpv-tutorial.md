---
title: MPV — The Minimalist's Media Player Guide
description: Keyboard shortcuts, configuration, and advanced playback with the most powerful lightweight player.
date: 2026-05-12
category: tutorial
tags: [mpv, media-player, keyboard, config]
---

MPV is the minimalist media player with incredible power under the hood. Here's how to control it.

<!-- app:mpv -->

## Basic Controls

MPV is keyboard-driven. There's no visible UI — just the video window.

| Key | Action |
|-----|--------|
| Space / P | Play/Pause |
| ← → | Seek 5 seconds |
| ↑ ↓ | Seek 1 minute |
| [ ] | Change speed |
| F | Fullscreen |
| M | Mute |
| 9 / 0 | Volume down/up |
| S | Screenshot |
| Q | Quit |

## The Configuration File

Create `~/.config/mpv/mpv.conf` on Linux/Mac, or `%APPDATA%/mpv/mpv.conf` on Windows:

```ini
# Video
profile=gpu-hq
scale=ewa_lanczossharp
video-sync=display-resample

# Subtitles
sub-font-size=40
sub-bold=yes
sub-color="#FFFFFF"

# Audio
volume=100
volume-max=200

# OSD
osd-font-size=24
osd-playing-msg="${media-title}"
```

## Input Customization

Create `input.conf` in the same folder:

```ini
Ctrl+LEFT   seek -60
Ctrl+RIGHT  seek 60
Shift+UP    add volume 5
Shift+DOWN  add volume -5
```

## Streaming

MPV plays YouTube and other streams directly:

```bash
mpv https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

Combine with yt-dlp for more reliable streaming. MPV passes the URL to yt-dlp automatically if installed.

## Advanced Playback

```bash
mpv --start=5:30 video.mp4      # Start at 5:30
mpv --speed=1.5 video.mp4       # 1.5x speed
mpv --loop-file video.mp4       # Loop single file
mpv --loop-playlist folder/     # Loop all files in folder
mpv --ab-loop-a=1:00 --ab-loop-b=2:00 video.mp4  # Loop a section
```
