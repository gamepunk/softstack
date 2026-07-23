---
install:
  homebrew: brew install --cask raspberry-pi-imager
  winget: winget install RaspberryPiFoundation.RaspberryPiImager
  flatpak: flatpak install flathub org.raspberrypi.rpi-imager
  apt: sudo apt install rpi-imager
  snap: sudo snap install rpi-imager
  choco: choco install rpi-imager
name: Raspberry Pi Imager
tagline: The official imaging tool for Raspberry Pi. Burn OS images to SD cards, the right way.
description: |
  Raspberry Pi Imager is the official tool from the Raspberry Pi Foundation for writing OS images to SD cards and USB drives. It downloads the latest images directly, includes Raspberry Pi OS, Ubuntu, and dozens of other systems, and has advanced options for pre-configuring Wi-Fi and SSH.

  It's free, cross-platform, and trivially simple — pick a board, pick an OS, pick storage, write. It also includes a format-as-FAT32 utility for resetting cards.
website: https://www.raspberrypi.com/software/
category: developer
platforms: [mac, windows, linux]
type: gui
price: free
version: "2.0.10"
download: https://github.com/raspberrypi/rpi-imager/releases/download/v2.0.10/rpi-imager-v2.0.10.dmg
featured: false
---
