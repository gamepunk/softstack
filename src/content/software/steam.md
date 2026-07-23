---
install:
  homebrew: brew install --cask steam
  playstore: https://play.google.com/store/apps/details?id=com.valvesoftware.android.steam.community
  appstore: https://apps.apple.com/app/steam-mobile/id495369748
  winget: winget install Valve.Steam
  apt: sudo apt install steam
  snap: sudo snap install steam
  flatpak: flatpak install flathub com.valvesoftware.Steam
  choco: choco install steam
name: Steam
tagline: The world's largest PC gaming platform. Thousands of free-to-play games, no subscription.
description: |
  Steam is the de facto platform for PC gaming, and its free-to-play library alone is staggering: Dota 2, CS2, Warframe, Apex Legends, and hundreds more. The client handles downloads, updates, cloud saves, and community features seamlessly.

  Even if you never spend a cent, Steam gives you access to a massive library of genuinely free games — no subscription, no time limits. It's available on Mac, Windows, and Linux with Proton.
website: https://store.steampowered.com/about/
category: media
platforms: [mac, windows, linux]
type: gui
price: free
version: "6.0"
download: https://cdn.cloudflare.steamstatic.com/client/installer/steam.dmg
featured: false
---
