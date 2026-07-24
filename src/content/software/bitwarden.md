---
install:
  homebrew: brew install --cask bitwarden
  playstore: https://play.google.com/store/apps/details?id=com.x8bit.bitwarden
  appstore: https://apps.apple.com/app/bitwarden-password-manager/id1137397744
  winget: winget install Bitwarden.Bitwarden
  apt: sudo apt install bitwarden
  snap: sudo snap install bitwarden
  flatpak: flatpak install flathub com.bitwarden.desktop
  choco: choco install bitwarden
name: Bitwarden
tagline: Open-source password manager. Free, audited, and available everywhere.
description: |
  Bitwarden is the password manager you can trust. It's fully open-source, independently audited, and the free tier includes unlimited passwords across unlimited devices — something no competitor offers.

  Browser extensions, desktop apps, mobile apps, and CLI all sync seamlessly. Passkeys, TOTP generation, and emergency access are included. For most people, the free plan is all they'll ever need.
website: https://bitwarden.com
category: security
platforms: [mac, windows, linux, ios, android, web]
type: gui
price: freemium
version: "2026.6.1"
download: https://github.com/bitwarden/clients/releases/download/desktop-v2026.6.1/Bitwarden-2026.6.1-universal.dmg
featured: true
logo: /images/bitwarden.jpg
---
