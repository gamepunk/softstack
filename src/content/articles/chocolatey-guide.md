---
title: Chocolatey Guide — Windows Package Manager for Power Users
description: Install, update, and manage Windows apps with Chocolatey. The older, larger alternative to winget.
date: 2026-06-11
category: guide
tags: [chocolatey, windows, package-manager]
---

Chocolatey is the original Windows package manager with a massive community-maintained catalog. It predates winget and has more packages.

## Installation

Open PowerShell as Administrator:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Installing Apps

```bash
choco install firefox
choco install vlc
choco install vscode
choco install discord
```

## Useful Commands

| Command | Action |
|---------|--------|
| `choco search <term>` | Find packages |
| `choco install <pkg>` | Install |
| `choco upgrade all` | Update everything |
| `choco list --local-only` | Show installed |
| `choco uninstall <pkg>` | Remove |

## Chocolatey vs winget

| | Chocolatey | winget |
|---|-----------|--------|
| Age | Since 2011 | Since 2020 |
| Catalog | ~10,000 packages | ~5,000 packages |
| Built-in | No | Yes (Win 10/11) |
| GUI | Community tools available | No |

Use winget if you want the built-in Microsoft solution. Use Chocolatey if you need a larger catalog or more mature tooling.
