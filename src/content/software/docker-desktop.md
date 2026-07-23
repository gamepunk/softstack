---
install:
  homebrew: brew install --cask docker-desktop
  winget: winget install Docker.DockerDesktop
  apt: sudo apt install docker-desktop
  choco: choco install docker-desktop
name: Docker Desktop
tagline: Containers made visual. Build, ship, and run applications in isolated environments.
description: |
  Docker Desktop wraps the Docker engine in a friendly GUI for Mac, Windows, and Linux. Start and stop containers, inspect logs, browse volumes, manage images, and monitor resource usage — all from a dashboard instead of memorizing CLI flags.

  It includes Docker Compose, Kubernetes, and extension marketplace. Free for personal use and small businesses, which covers the vast majority of individual developers.
website: https://www.docker.com/products/docker-desktop/
category: developer
platforms: [mac, windows, linux]
type: gui
price: freemium
version: "4.83.0,234302"
download: https://desktop.docker.com/mac/main/arm64/234302/Docker.dmg
featured: false
---
