---
title: Audacity Tutorial — Edit Audio Like a Pro for Free
description: Record, edit, and export audio with Audacity. Perfect for podcasts, music clips, and voiceovers.
date: 2026-06-26
category: tutorial
tags: [audacity, audio, podcast, editing]
---

Audacity is the free audio editor that's been powering podcasts and music projects for over 20 years.

<!-- app:audacity -->

## Installation

```bash
brew install --cask audacity
```

## Recording

Click the red Record button. Select your microphone from the dropdown. Hit Stop when done. Your recording appears as a waveform.

## Basic Editing

- **Select a region**: Click and drag across the waveform
- **Cut/Copy/Paste**: Ctrl+X/C/V (same as text)
- **Delete**: Select and press Delete
- **Trim**: Select what you want to keep, Ctrl+T

## Essential Effects

- **Noise Reduction**: Select a few seconds of silence, Effect → Noise Reduction → Get Noise Profile. Then select the whole track and apply.
- **Normalize**: Effect → Normalize. Makes quiet audio louder.
- **Compressor**: Smooths out volume differences.
- **Fade In/Out**: Effect → Fading.

## Exporting

File → Export → Export as MP3 (or WAV for lossless). MP3 requires the LAME encoder (Audacity will prompt you to download it on first use).

For podcasts, export as mono MP3 at 128kbps — it sounds great and keeps file sizes small.
