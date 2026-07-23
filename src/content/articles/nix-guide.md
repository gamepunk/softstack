---
title: Nix Package Manager — Reproducible Installs Across Platforms
description: "The Nix approach to package management: declarative, reproducible, and cross-platform. For developers who want deterministic builds."
date: 2026-06-10
category: guide
tags: [nix, package-manager, cross-platform, reproducible]
---

Nix takes a fundamentally different approach: every package is stored in isolation with a cryptographic hash of its dependencies. This means no dependency conflicts and fully reproducible environments.

## Installation

```bash
sh <(curl -L https://nixos.org/nix/install)
```

## Installing Apps

```bash
nix-env -iA nixpkgs.firefox
nix-env -iA nixpkgs.vlc
nix-env -iA nixpkgs.vscode
```

## Why Nix?

- **No dependency hell** — Every package has its own isolated dependencies
- **Rollbacks** — Every change is reversible
- **Reproducible** — Same config produces the same environment on any machine
- **Cross-platform** — Works on macOS and Linux

## The Declarative Approach

Instead of installing packages imperatively, define your environment in a file:

```nix
# home.nix
{ pkgs, ... }: {
  home.packages = with pkgs; [
    firefox vlc vscode gimp
  ];
}
```

Run `home-manager switch` and your environment is exactly as defined.

Nix has a steeper learning curve than Homebrew or winget, but for developers who want deterministic, reproducible environments, it's unmatched.
