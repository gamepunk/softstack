---
title: Ventoy — One USB Drive, Unlimited Bootable ISOs
description: Set up Ventoy once, then just copy ISO files to boot them. No more reformatting.
date: 2026-05-15
category: tutorial
tags: [ventoy, bootable-usb, multiboot, linux]
---

Ventoy is a game-changer for bootable USBs: install it once, then just copy ISOs.

<!-- app:ventoy -->

## Setup

1. Download Ventoy and extract it
2. Run Ventoy2Disk.exe (Windows) or the GUI script (Linux)
3. Select your USB drive → Install
4. Wait 30 seconds — done

The USB now has a small Ventoy partition and a large data partition. Copy any ISO files (Windows, Linux, rescue disks, etc.) directly to the data partition. No special tools needed.

## Booting

Insert the USB, reboot, boot from USB. Ventoy shows a menu of all ISOs on the drive. Select one and it boots. No configuration, no reformatting between ISOs. Copy new ISOs anytime — they appear in the menu automatically.

## Tips

- Works with BIOS and UEFI (including Secure Boot with enrollment)
- Supports 1000+ tested ISOs
- Supports persistence for Linux ISOs (save changes between sessions)
- Update Ventoy without losing data: just re-run the installer and choose "Update"

## Why Ventoy Over Rufus?

Rufus is for one ISO per USB. Ventoy is for many ISOs per USB. Use Ventoy when you want a single USB drive that boots Windows, multiple Linux distros, and rescue tools. Use Rufus when you need a dedicated installer with specific settings.
