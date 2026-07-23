---
title: FileZilla — FTP and SFTP File Transfers Made Simple
description: Connect to servers, transfer files, and manage remote directories with FileZilla.
date: 2026-05-19
category: tutorial
tags: [filezilla, ftp, sftp, file-transfer]
---

FileZilla is the standard free FTP client. Here's how to transfer files securely.

<!-- app:filezilla -->

## Connecting to a Server

Enter your server details in the quick-connect bar at the top: Host (e.g., `sftp.example.com`), Username, Password, Port (22 for SFTP). Click Quickconnect.

For servers you use regularly, File → Site Manager → New Site. Save the connection details. SFTP (SSH File Transfer Protocol) should always be preferred over plain FTP — it encrypts everything.

## The Interface

- **Left panel** — Your local files and folders
- **Right panel** — Remote server files and folders
- **Top panel** — Connection log (useful for debugging)
- **Bottom panel** — Transfer queue

Drag files between panels to transfer. Right-click files for options (rename, delete, permissions).

## Transfer Modes

Transfer → Transfer Type:
- **Auto** — F ileZilla decides (usually correct)
- **Binary** — For images, videos, executables
- **ASCII** — For plain text files only

Auto is fine for nearly everything.

## Directory Comparison

View → Directory Comparison. Files that exist on one side but not the other are highlighted in yellow. Essential for syncing folders — just transfer the highlighted files.

## Keyboard Shortcuts

- **Ctrl+S** — Site Manager
- **Ctrl+D** — Disconnect
- **F5** — Refresh
- **Tab** — Switch between local and remote panels
