---
title: How to Use iTerm2 Like a Pro
description: Profiles, split panes, hotkey window, and the features that make iTerm2 the best terminal for macOS.
date: 2026-06-04
category: tutorial
tags: [iterm2, terminal, mac, developer]
---

iTerm2 is the terminal emulator macOS should have shipped with. Here's how to use its best features.

<!-- app:iterm2 -->

## Installation

```bash
brew install --cask iterm2
```

## Hotkey Window

iTerm2's killer feature: a terminal that drops down from the top of your screen with a global hotkey. Go to Preferences → Keys → Hotkey → check "Show/hide all windows with a system-wide hotkey." I use Opt+Space.

This gives you instant terminal access from any app.

## Split Panes

- **Cmd+D** — Split vertically
- **Cmd+Shift+D** — Split horizontally
- **Cmd+[/]** — Navigate between panes
- **Cmd+Shift+Enter** — Maximize current pane

## Search

Cmd+F to search. It highlights ALL matches in the scrollback, not just the current one. Cmd+G for next match, Cmd+Shift+G for previous.

## Profiles

Create different profiles for different workflows. One for local dev (light background, small font), one for SSH (dark, large font), one for logs. Profiles → Open Profiles to switch.

## Shell Integration

Install iTerm2's shell integration for instant replay (rewind your terminal session), command completion, and the ability to jump to previous prompts. Curl the install script:

```bash
curl -L https://iterm2.com/shell_integration/install_shell_integration.sh | bash
```
