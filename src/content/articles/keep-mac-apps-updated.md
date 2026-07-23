---
title: How to Keep Your Mac Apps Updated Automatically
description: Stop manually checking for updates. Use Homebrew, Mac App Store, and built-in updaters to keep everything current.
date: 2026-07-14
category: guide
tags: [mac, homebrew, updates, maintenance]
---

Manually checking each app for updates is tedious and error-prone. Here's how to automate the process so your Mac always runs the latest versions.

## Homebrew Cask — One Command to Rule Them All

If you installed apps via Homebrew Cask, updating everything is a single command:

```bash
brew upgrade --cask --greedy
```

The `--greedy` flag checks for updates in apps that use their own auto-updater (like Chrome or VS Code), not just those managed by Homebrew.

## Set Up Automatic Updates

Create a simple launchd job to run updates weekly:

```bash
brew autoupdate start --upgrade-interval 7
```

This runs `brew update` and `brew upgrade` automatically every 7 days in the background.

## Mac App Store Apps

Apps from the Mac App Store update automatically if you enable it:

- Open **System Settings → App Store**
- Enable **Automatic Updates**

## Apps with Built-in Updaters

Many apps (Chrome, Firefox, VS Code, Discord) check for updates on launch and install them silently. There's nothing you need to do — just close and reopen the app occasionally.

## Check What's Out of Date

To see which of your Homebrew-installed apps need updates:

```bash
brew outdated --cask --greedy
```

This lists every cask with a newer version available, without installing anything.

## The Complete Update Routine

Once a week, run these three commands:

```bash
brew update && brew upgrade
brew upgrade --cask --greedy
softwareupdate --install --all
```

That covers Homebrew formulas, Homebrew casks, and macOS system updates — all in 30 seconds.
