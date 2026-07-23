---
title: Snap Package Manager Guide for Linux
description: Install, update, and manage Linux apps with Snap. Automatic updates, sandboxing, and a growing app catalog.
date: 2026-06-20
category: guide
tags: [snap, linux, package-manager, ubuntu]
---

Snap is Canonical's universal Linux package format. Apps are sandboxed, auto-update, and work on any distribution that supports snapd.

## Installing snapd

Ubuntu comes with snap pre-installed. For other distros:

```bash
# Debian
sudo apt install snapd

# Fedora
sudo dnf install snapd

# Arch
sudo pacman -S snapd
sudo systemctl enable --now snapd.socket
```

## Installing Apps

```bash
sudo snap install <app-name>
```

Examples:

```bash
sudo snap install firefox
sudo snap install vlc
sudo snap install code --classic
sudo snap install spotify
```

The `--classic` flag grants full system access (needed for code editors and IDEs).

## Useful Commands

| Command | Action |
|---------|--------|
| `snap find <term>` | Search for apps |
| `snap install <app>` | Install |
| `snap refresh` | Update all snaps |
| `snap list` | Show installed |
| `snap remove <app>` | Uninstall |

Snaps update automatically in the background. You'll get a notification when updates require an app restart.
