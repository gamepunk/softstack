---
install:
  homebrew: brew install --cask transmission
  winget: winget install Transmission.Transmission
  apt: sudo apt install transmission
  snap: sudo snap install transmission
  flatpak: flatpak install flathub com.transmissionbt.Transmission
  choco: choco install transmission
name: Transmission
tagline: A fast, easy, and free BitTorrent client. No ads, no nonsense, just downloads.
description: |
  Transmission is the BitTorrent client that does exactly what you need and nothing more. It's lean, fast, and respects your system resources. The interface is refreshingly simple: add a torrent and it downloads.

  It runs on macOS, Windows, and Linux with native UI on each platform. Remote access via web interface or CLI. Open-source and completely free — no bundled adware, which is sadly rare in this category.
website: https://transmissionbt.com
category: utility
platforms: [mac, windows, linux]
type: gui
price: open-source
version: "4.1.3"
download: https://github.com/transmission/transmission/releases/download/4.1.3/Transmission-4.1.3.dmg
featured: false
---
