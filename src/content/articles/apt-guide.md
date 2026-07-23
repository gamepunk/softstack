---
title: How to Install Linux Apps with APT
description: The apt package manager on Debian and Ubuntu — install, update, and remove software from the command line.
date: 2026-06-15
category: guide
tags: [apt, linux, debian, ubuntu]
---

APT (Advanced Package Tool) is the package manager for Debian, Ubuntu, and their derivatives. It handles installing, updating, and removing software from your system's repositories.

## Basic Commands

```bash
sudo apt update           # Refresh package list
sudo apt upgrade          # Upgrade all packages
sudo apt install <name>   # Install a package
sudo apt remove <name>    # Remove a package
sudo apt autoremove       # Clean up unused dependencies
```

## Installing GUI Apps

```bash
sudo apt install firefox
sudo apt install vlc
sudo apt install gimp
sudo apt install libreoffice
sudo apt install thunderbird
```

## Searching

```bash
apt search <keyword>
apt show <package-name>   # View details
```

## Adding PPAs

Some apps aren't in the official repos. Add a PPA (Personal Package Archive):

```bash
sudo add-apt-repository ppa:<user>/<name>
sudo apt update
sudo apt install <package>
```

## Keeping Your System Clean

```bash
sudo apt autoremove       # Remove unused packages
sudo apt autoclean        # Clear package cache
```

APT is fast, reliable, and the foundation of Debian-based systems. For most desktop apps, Flatpak or Snap offer newer versions and sandboxing.
