---
title: Kdenlive Tutorial — Free Video Editing for Linux and Beyond
description: Multi-track editing, transitions, effects, and exporting with Kdenlive.
date: 2026-05-03
category: tutorial
tags: [kdenlive, video-editing, linux, free]
---

Kdenlive is a powerful free video editor that works on Linux, Windows, and macOS. Here's how to edit your first video.

<!-- app:kdenlive -->

## The Workspace

Kdenlive's default layout has the project bin (top left), effects/composition (bottom left), preview monitor (top right), and timeline (bottom). Drag the edges to resize panels.

## Import and Organize

Drag video files into the project bin. Create folders in the bin to organize clips. Preview clips by double-clicking them.

## Cutting on the Timeline

Drag clips from the bin to the timeline track V1 (video). The timeline ruler measures time. Position the playhead where you want to cut.

- **Shift+R** — Cut clip at playhead
- **Delete** — Remove selected clip section
- **Drag** — Move clips
- **Z** — Zoom tool
- **Ctrl+Z** — Undo

## Adding Transitions

Drag the edge of a clip slightly into the next clip — Kdenlive auto-creates a dissolve transition. For other transitions, drag from the Effects panel under "Transitions" onto the timeline between clips.

## Effects

Effects live in the bottom-left panel. Drag any effect onto a clip in the timeline. The effect appears in the properties panel where you can adjust settings. Keyframeable — click the diamond icon next to any parameter to animate it over time.

## Titles

Project → Add Title Clip. Type your text, choose font, size, and position. Click Create Title. Drag the title clip onto the timeline's V2 track (above your video).

## Export

Project → Render. Choose a preset (MP4-H264/AAC is standard for web). Set the output file and click Render. The timeline renders from start to end unless you set a render zone.
