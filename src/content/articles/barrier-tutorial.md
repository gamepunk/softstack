---
title: Barrier — Control Multiple Computers with One Keyboard and Mouse
description: Set up Barrier to share a keyboard, mouse, and clipboard across Windows, Mac, and Linux machines.
date: 2026-05-30
category: tutorial
tags: [barrier, kvm, keyboard, cross-platform]
---

Barrier lets you control multiple computers with one keyboard and mouse, like a software KVM switch.

<!-- app:barrier -->

## Setup

Install Barrier on all computers. One computer will be the **server** (with the keyboard/mouse physically attached). The others are **clients**.

On the server:
1. Check "Server" and click "Configure Server"
2. Drag the monitor icon from the top-right to the grid
3. Position screens relative to each other (e.g., laptop centered, desktop to the right)
4. Rename screens to match the client computer names
5. Click OK → Start

On each client:
- Check "Client"
- Enter the server's IP address (shown on the server window)
- Click Start

## Daily Use

Move your mouse to the edge of one screen and it appears on the next. The keyboard follows the mouse. Copy on one computer (Ctrl+C), paste on another (Ctrl+V). Drag files between desktops (configure in server settings).

## SSL Encryption

Barrier → Change Settings → Enable SSL. This encrypts keyboard, mouse, and clipboard data between computers. Generate a certificate and copy the fingerprint to clients.

## Troubleshooting

If clients can't connect:
- Both computers on the same network
- Firewall allowing Barrier (port 24800)
- Server IP is correct (use `ipconfig` or `ifconfig`)
- Try disabling SSL temporarily to isolate the issue
