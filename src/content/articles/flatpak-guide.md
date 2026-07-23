---
title: Flatpak Explained — The Universal Linux App Format
description: What Flatpak is, how it works, and why it's become the standard way to distribute Linux desktop applications.
date: 2026-07-17
category: guide
tags: [flatpak, linux, package-manager, flathub]
---

Flatpak is a universal packaging format for Linux desktops. Unlike traditional distro packages (apt, dnf, pacman), Flatpak apps run in a sandbox, include their own dependencies, and work on any Linux distribution.

## Why Flatpak?

Traditional Linux packaging is fragmented. An app packaged for Ubuntu (.deb) won't work on Fedora (.rpm), and maintaining separate packages for every distro is a nightmare for developers.

Flatpak solves this: build once, run everywhere. The app bundles its own runtime and libraries, isolated from the system in a sandbox.

## Installing Flatpak

Ubuntu/Debian:
```bash
sudo apt install flatpak
```

Fedora:
```bash
sudo dnf install flatpak
```

Arch:
```bash
sudo pacman -S flatpak
```

## Adding Flathub

Flathub is the central repository for Flatpak apps:

```bash
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

Restart your system (or at least log out and back in) for the integration to take effect.

## Installing Apps

```bash
flatpak install flathub <app-id>
```

Examples:

```bash
flatpak install flathub org.blender.Blender
flatpak install flathub org.gimp.GIMP
flatpak install flathub org.videolan.VLC
flatpak install flathub com.visualstudio.code
```

## Useful Commands

| Command | What it does |
|---------|-------------|
| `flatpak search <term>` | Find apps |
| `flatpak install flathub <id>` | Install an app |
| `flatpak update` | Update all apps |
| `flatpak list` | List installed apps |
| `flatpak uninstall <id>` | Remove an app |
| `flatpak run <id>` | Launch an app |

## The Sandbox Model

Flatpak apps run in a container. They can only access what you explicitly permit through portals (file chooser, screenshot, notification, etc.). This means:

- Malicious apps can't read your files without permission
- Apps can't snoop on other apps
- Removing an app leaves no traces
