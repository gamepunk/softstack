---
title: Foobar2000 — The Audiophile's Music Player Setup
description: Configure bit-perfect output, ReplayGain, and a custom layout with Foobar2000 components.
date: 2026-05-26
category: tutorial
tags: [foobar2000, audio, music, audiophile]
---

Foobar2000 is the audiophile's music player. Tiny, customizable, and bit-perfect.

<!-- app:foobar2000 -->

## First Setup

Install, then: File → Preferences → Playback → Output. Select your output device. Choose WASAPI (event) or ASIO for bit-perfect output (bypasses Windows mixer for pure audio). Install the WASAPI output support component if it's not listed.

## Organize Your Library

File → Preferences → Media Library. Add your music folders. Foobar2000 scans them and builds a database. Use Album List (Ctrl+L) to browse by artist, album, genre, or folder structure.

## Essential Components

Components → Get more components. Install:
- **WASAPI output support** — Bit-perfect audio
- **ReplayGain Scanner** — Normalize volume across albums
- **Columns UI** — Alternative interface with more customization
- **Lyric Show Panel 3** — Synced lyrics

## ReplayGain

Select all tracks → Right-click → ReplayGain → Scan per album track gain. This tags files with volume adjustment metadata. Enable in Preferences → Playback → ReplayGain: "Use album gain." Now all albums play at the same perceived volume.

## Layout Customization

View → Layout → Enable layout editing mode. Drag panels around. Add a visualizer (View → Visualizations → Spectrogram). Create a layout with album art on the left, playlist in the center, and lyrics/visualizer on the right. Save: View → Layout → Create new preset.

## Keyboard Controls

Space = Play/Pause, Ctrl+→ = Next, Esc = minimize, Ctrl+F = search library.
