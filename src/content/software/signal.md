---
install:
  homebrew: brew install --cask signal
  playstore: https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms
  appstore: https://apps.apple.com/app/signal-private-messenger/id874139669
  winget: winget install OpenWhisperSystems.Signal
  apt: sudo apt install signal-desktop
  snap: sudo snap install signal-desktop
  flatpak: flatpak install flathub org.signal.Signal
  choco: choco install signal
name: Signal
tagline: Private messaging that actually works. End-to-end encrypted by default, open-source, and funded by donations.
description: |
  Signal is the gold standard for private communication. Every message, call, and attachment is end-to-end encrypted with no exceptions. The protocol is so good that WhatsApp and Google Messages adopted it.

  It looks and works like a normal messaging app — no friction, no nerd tax. Voice and video calls, group chats, disappearing messages, and sticker packs are all there. The only data Signal has on you is the day you signed up.
website: https://signal.org
category: communication
platforms: [mac, windows, linux, ios, android]
type: gui
price: open-source
version: "8.20.0"
download: https://updates.signal.org/desktop/signal-desktop-mac-arm64-8.20.0.zip
featured: true
---
