---
name: Visual Studio Code
tagline: The editor that ate the world. Free, open-source, and endlessly extensible.
description: |
  VS Code is the dominant code editor for good reason. Its extension marketplace has everything from language support to themes to full IDE features, all available with a few clicks. Built-in Git integration, terminal, debugger, and remote development make it a complete toolkit.

  Despite being an Electron app, performance is excellent thanks to years of optimization. The Remote-SSH and Dev Containers extensions let you develop on any machine as if it were local.
website: https://code.visualstudio.com
category: developer
platforms: [mac, windows, linux]
type: gui
price: open-source
version: "1.130.0"
download: https://update.code.visualstudio.com/1.130.0/darwin-arm64/stable
featured: true
install:
  homebrew: brew install --cask visual-studio-code
  winget: winget install Microsoft.VisualStudioCode
  flatpak: flatpak install flathub com.visualstudio.code
  choco: choco install vscode
  apt: sudo apt install sudo snap install code --classic
  snap: sudo snap install code --classic
  nix: nix-env -iA nixpkgs.vscode
---
