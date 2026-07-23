---
title: Rufus — Create Bootable USB Drives the Right Way
description: Flash Windows, Linux, and other ISOs to USB drives. Dual UEFI/BIOS, persistent storage, and more.
date: 2026-05-13
category: tutorial
tags: [rufus, bootable-usb, windows, linux]
---

Rufus is the fastest, most reliable tool for creating bootable USB drives. Here's how to use every feature.

<!-- app:rufus -->

## Basic USB Creation

1. Insert your USB drive (8GB+ recommended)
2. Open Rufus (no installation needed)
3. Select your USB drive under Device
4. Click SELECT and choose your ISO file
5. Click START

Rufus auto-detects the right settings. Accept the defaults for most use cases. The process takes 5-15 minutes depending on the ISO size and USB speed.

## Windows Installation USB

For Windows 11, Rufus handles TPM and Secure Boot bypass automatically. When the "Customize Windows installation" dialog appears, check "Remove requirement for 4GB+ RAM, Secure Boot, and TPM 2.0" for compatibility with older hardware.

## Persistent Storage for Linux

For Linux live USBs, set Persistent partition size (under advanced options) to save changes between reboots. A 4GB persistence partition lets you install software and save files that survive reboots.

## Dual UEFI + BIOS

Under Partition scheme, select MBR for BIOS/UEFI compatibility, or GPT for UEFI-only systems. The Target system field updates automatically. For maximum compatibility, choose MBR — it works on both old and new machines.

## Advanced Format Options

- **Quick format** — Faster, skips bad sector check
- **Extended label and icon files** — Makes the USB look nicer in Explorer

## Tips

- Always backup your USB drive — Rufus will erase everything
- Use USB 3.0 drives for faster write speeds
- If the ISO is larger than your USB, use Ventoy instead
