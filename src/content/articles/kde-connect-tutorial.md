---
title: KDE Connect — Bridge Your Phone and Computer
description: Share files, sync clipboard, control media, and answer texts from your desktop.
date: 2026-05-16
category: tutorial
tags: [kde-connect, phone, sync, cross-device]
---

KDE Connect links your phone and computer over Wi-Fi. No cables, no cloud, no accounts.

<!-- app:kde-connect -->

## Setup

Install on both devices. On your computer:

```bash
# Linux
sudo apt install kdeconnect

# Windows/Mac — download from kdeconnect.kde.org
```

Install the Android app from Google Play (or F-Droid). For iOS, get it from the App Store (limited features due to Apple restrictions).

Open both apps. They should detect each other on the same Wi-Fi network. Tap "Pair" and accept on both devices.

## Features

- **File sharing** — Send files in either direction. Appears as a share target in Android
- **Clipboard sync** — Copy on phone, paste on computer (and vice versa)
- **Media control** — Pause, play, skip tracks playing on your computer from your phone
- **Remote input** — Use your phone as a touchpad and keyboard for your computer
- **Notifications** — Phone notifications appear on your computer
- **SMS** — Send and reply to text messages from your desktop
- **Find my phone** — Ring your phone from your computer
- **Run commands** — Execute predefined terminal commands from your phone

## Configuration

On the desktop app, click your paired device. Enable/disable each plugin individually. For privacy, you might disable notifications but keep clipboard sync and file sharing. Set "Battery report" to see your phone's battery level on your desktop.

## Troubleshooting

If devices don't detect each other, check: both on same Wi-Fi, firewall not blocking port 1714-1764 (TCP/UDP). On Linux, check your distro's firewall settings.
