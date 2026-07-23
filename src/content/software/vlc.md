---
name: VLC Media Player
tagline: Plays everything. The Swiss Army knife of media players — no codec pack needed.
description: |
  VLC is the media player that refuses to say no. It handles virtually every video and audio format ever invented, streams from network sources, and even repairs damaged files. It's been the gold standard for nearly two decades.

  It runs on everything, consumes minimal resources, and has zero ads or tracking. The interface may look dated, but the engine under the hood is unmatched.
website: https://www.videolan.org/vlc/
category: media
platforms: [mac, windows, linux, ios, android]
type: gui
price: open-source
version: "3.0.23"
download: https://get.videolan.org/vlc/3.0.23/macosx/vlc-3.0.23-arm64.dmg
featured: true
install:
  homebrew: brew install --cask vlc
  playstore: https://play.google.com/store/apps/details?id=org.videolan.vlc
  appstore: https://apps.apple.com/app/vlc-for-mobile/id650377962
  winget: winget install VideoLAN.VLC
  choco: choco install vlc
  apt: sudo apt install vlc
  snap: sudo snap install vlc
  flatpak: flatpak install flathub org.videolan.VLC
  nix: nix-env -iA nixpkgs.vlc
---
