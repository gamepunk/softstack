---
title: OBS Studio Setup Guide — Start Streaming in 20 Minutes
description: Configure OBS for game streaming, recording, or video calls. Scene setup, audio mixing, and export settings.
date: 2026-07-02
category: tutorial
tags: [obs, streaming, recording, video]
---

OBS Studio is the free, open-source backbone of live streaming. This guide gets you from install to your first stream.

<!-- app:obs-studio -->

## Installation

```bash
brew install --cask obs
```

## First Launch: Auto-Configuration

OBS will ask if you want to run the auto-configuration wizard. For streaming, say yes and follow the prompts. It'll test your bandwidth and set optimal encoding settings.

## Building Your First Scene

Scenes are collections of sources (your webcam, game window, images, text). Create your first scene:

1. Click **+** in the Scenes panel, name it "Main"
2. Click **+** in the Sources panel
3. Add a **Display Capture** (your entire screen) or **Game Capture** (a specific game)
4. Add a **Video Capture Device** (your webcam)
5. Resize and position sources by dragging in the preview

## Audio Setup

OBS has two default audio sources: Desktop Audio and Mic/Aux. In the Audio Mixer panel:

- Adjust levels so your voice peaks around -10dB (yellow zone)
- Add filters: click the gear icon → Filters → Noise Suppression (RNNoise is excellent)

## Going Live

1. Go to Settings → Stream
2. Choose your platform (Twitch, YouTube, etc.)
3. Enter your stream key (find this in your platform's dashboard)
4. Click "Start Streaming"

## Recording Instead of Streaming

Click "Start Recording" instead. Settings → Output lets you choose format (MKV recommended — it survives crashes) and quality.

## Pro Tips

- Use **Studio Mode** for scene transitions without viewers seeing your setup
- Create a "BRB" scene with just text for breaks
- Set hotkeys in Settings → Hotkeys for quick scene switching
