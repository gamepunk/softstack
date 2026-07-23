---
title: Getting Started with GIMP — Photo Editing Without Photoshop
description: Learn the basics of GIMP for photo retouching, layers, and exporting. A practical guide for Photoshop refugees.
date: 2026-07-04
category: tutorial
tags: [gimp, photo-editing, design, beginner]
---

GIMP is a powerful free image editor, but its interface can feel unfamiliar if you're coming from Photoshop. This guide covers the essentials.

<!-- app:gimp -->

## Installation

```bash
brew install --cask gimp
```

## The Interface

When you first open GIMP, you'll see three floating windows. You can switch to single-window mode via Windows → Single-Window Mode. Do this — it makes the experience much more familiar.

## Essential Tools

- **Crop (Shift+C)** — Trim your image
- **Scale (Shift+S)** — Resize an image or layer
- **Move (M)** — Move layers around
- **Text (T)** — Add text
- **Heal (H)** — Remove blemishes by sampling nearby areas

## Working with Layers

Layers work exactly like Photoshop. Each layer can have its own opacity, blend mode, and visibility. Use Ctrl+Shift+N to create a new layer.

Most edits should happen on new layers so you can always go back.

## Common Tasks

**Resize an image:**
Image → Scale Image → Enter new dimensions → Scale

**Remove a background:**
Use the Fuzzy Select tool (U), click the background, press Delete. For complex edges, use the Paths tool (B) to draw a selection.

**Adjust colors:**
Colors → Levels (or Curves). Drag the sliders to adjust shadows, midtones, and highlights.

**Export for web:**
File → Export As → Choose JPEG or PNG. GIMP's native format is XCF (like PSD) — use Export, not Save, for sharing.

## Key Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+Z | Undo |
| Ctrl+Shift+Z | Redo |
| [ / ] | Smaller / larger brush |
| Ctrl+Shift+N | New layer |
| Ctrl+L | Layers panel |
