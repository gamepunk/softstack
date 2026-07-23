---
install:
  homebrew: brew install --cask tor-browser
  winget: winget install TorProject.TorBrowser
  apt: sudo apt install torbrowser-launcher
  flatpak: flatpak install flathub org.torproject.torbrowser-launcher
name: Tor Browser
tagline: Browse the internet privately. Built on Firefox, hardened for anonymity.
description: |
  Tor Browser routes your traffic through the Tor network, making it extremely difficult to track your browsing or identify your location. It blocks trackers, fingerprinting, and isolates each website so cross-site tracking is impossible.

  Based on Firefox ESR, it feels like a normal browser but with serious privacy protections built in by default. Free, open-source, and maintained by the nonprofit Tor Project.
website: https://www.torproject.org
category: security
platforms: [mac, windows, linux]
type: gui
price: open-source
version: "15.0.19"
download: https://www.torproject.org/dist/torbrowser/15.0.19/tor-browser-macos-15.0.19.dmg
featured: false
---
