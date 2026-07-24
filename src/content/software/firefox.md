---
name: Firefox
tagline: The independent browser. Privacy-first, open-source, and not owned by an ad company.
description: |
  Firefox is the only major browser not built on Chromium and not controlled by an advertising giant. Mozilla's Enhanced Tracking Protection blocks trackers and fingerprinting by default. The container tabs feature isolates your online identities.

  It's fast, customizable, and supports all the extensions you need. Multi-Account Containers alone is worth switching for if you manage multiple work and personal accounts.
website: https://www.mozilla.org/firefox/
category: productivity
platforms: [mac, windows, linux, ios, android]
type: gui
price: open-source
version: "153.0"
download: https://download-installer.cdn.mozilla.net/pub/firefox/releases/153.0/mac/en-US/Firefox%20153.0.dmg
logo: /images/firefox.png
featured: true
install:
  homebrew: brew install --cask firefox
  playstore: https://play.google.com/store/apps/details?id=org.mozilla.firefox
  appstore: https://apps.apple.com/app/firefox-private-safe-browser/id989804926
  winget: winget install Mozilla.Firefox
  apt: sudo apt install firefox
  snap: sudo snap install firefox
  flatpak: flatpak install flathub org.mozilla.firefox
  choco: choco install firefox
---
