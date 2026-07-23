---
install:
  homebrew: brew install --cask keepassxc
  winget: winget install KeePassXCTeam.KeePassXC
  apt: sudo apt install keepassxc
  snap: sudo snap install keepassxc
  flatpak: flatpak install flathub org.keepassxc.KeePassXC
  choco: choco install keepassxc
name: KeePassXC
tagline: Offline, open-source password manager. Your passwords stay on your machine.
description: |
  KeePassXC is the password manager for people who don't trust the cloud. Passwords are stored in an encrypted local database that you control. It integrates with browsers, generates TOTP codes, and supports YubiKey challenge-response.

  The interface is functional and cross-platform. If your threat model says "no cloud" but you still want a proper password manager with auto-type and browser integration, this is it.
website: https://keepassxc.org/
category: security
platforms: [mac, windows, linux]
type: gui
price: open-source
version: "2.7.12"
download: https://github.com/keepassxreboot/keepassxc/releases/download/2.7.12/KeePassXC-2.7.12-arm64.dmg
featured: false
---
