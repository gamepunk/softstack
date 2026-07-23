---
title: VeraCrypt — Encrypt Your Files and Drives for Free
description: Create encrypted containers, encrypt entire drives, and protect sensitive data with VeraCrypt.
date: 2026-05-14
category: tutorial
tags: [veracrypt, encryption, security, privacy]
---

VeraCrypt is the gold standard for free disk encryption. Here's how to protect your data.

<!-- app:veracrypt -->

## Create an Encrypted Container

1. Click "Create Volume" → "Create an encrypted file container" → Next
2. Choose "Standard VeraCrypt volume"
3. Select a file location and name (e.g., `MyVault.hc`)
4. Encryption: AES (default, fast and secure). Hash: SHA-512
5. Set container size (e.g., 500 MB for documents)
6. Set a strong password (20+ characters, memorable but unpredictable)
7. Move your mouse randomly to generate entropy → Format

## Mount Your Container

1. Select a drive letter (e.g., X:)
2. Click "Select File" and choose your container
3. Click "Mount" and enter your password
4. The container appears as a new drive in Explorer

Files are encrypted/decrypted on the fly. When you're done, click "Dismount." The drive disappears.

## Encrypt Your System Drive

System → Encrypt System Partition/Drive. This encrypts your entire Windows system drive. You'll enter a password before Windows boots — without it, the drive is unreadable. The process takes hours but you can continue using your computer.

## Hidden Volumes

Create a hidden volume inside a standard container. If forced to reveal a password, you give the outer volume password — the hidden volume remains undetectable. Two passwords, two separate encrypted spaces inside one file.

## Mount Options

- **Read-only** — Prevent accidental modification
- **Mount as removable medium** — Better performance for some workflows
- **Cache passwords in driver memory** — Only re-enter on reboot
