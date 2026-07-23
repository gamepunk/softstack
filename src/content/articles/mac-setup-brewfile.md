---
title: How to Set Up a New Mac with Homebrew in 10 Minutes
description: Automate your Mac setup with a Brewfile. Install all your apps, fonts, and tools with one command.
date: 2026-07-06
category: guide
tags: [mac, homebrew, setup, automation]
---

Setting up a new Mac usually means hours of downloading apps one by one. With a Brewfile, you can install everything with a single command.

## Create Your Brewfile

On your current Mac, export everything you've installed:

```bash
brew bundle dump --describe --file=~/Brewfile
```

This creates a `Brewfile` in your home directory listing every formula, cask, and Mac App Store app you've installed via Homebrew.

## What's in a Brewfile

```ruby
# Brewfile
tap "homebrew/cask"
brew "git"
brew "node"
cask "firefox"
cask "visual-studio-code"
cask "vlc"
mas "Xcode", id: 497799835
```

## On Your New Mac

1. Install Homebrew:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Copy your Brewfile to the new Mac and run:
```bash
brew bundle install --file=~/Brewfile
```

That's it. All your apps install automatically.

## Keep Your Brewfile Updated

After installing new apps, update the Brewfile:

```bash
brew bundle dump --describe --force --file=~/Brewfile
```

## Version Control Your Brewfile

Store it in a dotfiles repo:

```bash
cp ~/Brewfile ~/.dotfiles/
cd ~/.dotfiles
git add Brewfile && git commit -m "Update Brewfile"
```

Now your Mac setup is reproducible, version-controlled, and portable. New machine? Run one command. New team member? Share the Brewfile.
