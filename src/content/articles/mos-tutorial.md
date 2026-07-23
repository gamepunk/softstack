---
title: Mos — Smooth Scrolling for Any Mouse on macOS
description: Enable smooth, trackpad-like scrolling with any third-party mouse on your Mac.
date: 2026-05-24
category: tutorial
tags: [mos, mac, mouse, scrolling]
---

Mos fixes the janky, stepped scrolling of third-party mice on macOS.

<!-- app:mos -->

## Installation

```bash
brew install --cask mos
```

Mos lives in your menu bar. Grant Accessibility permission when prompted (required for smooth scrolling to work).

## Configuration

Click the Mos menu bar icon → Preferences.

- **Step** — Lower = smoother. Set to 30-40 for a trackpad-like feel
- **Speed** — How fast the scroll accelerates
- **Duration** — How long the smooth scroll animation lasts. Lower = more responsive

## Reverse Scrolling

Enable "Reverse Direction" for your mouse. This lets you set your trackpad to "natural" scrolling and your mouse to traditional scrolling independently — something macOS doesn't allow natively.

## Per-App Settings

Mos can apply different settings per app. For example: smooth scrolling in browsers and code editors, but disabled in games where it interferes. Add apps in the "Applications" tab and customize scroll behavior for each.

## Why Not Built-In?

macOS's scrolling works perfectly with Apple's Magic Mouse and trackpads, but third-party mice get stepped, discrete scrolling. Mos intercepts these scroll events and interpolates smooth, continuous motion between them. It's one of those tools you install once and forget — until you use a Mac without it.
