---
title: PuTTY — SSH Connections on Windows Made Simple
description: Connect to remote servers via SSH with PuTTY. Save sessions, tunnel ports, and configure terminals.
date: 2026-06-19
category: tutorial
tags: [putty, ssh, terminal, windows]
---

PuTTY is the classic SSH client for Windows. Simple, reliable, and free.

<!-- app:putty -->

## Connecting

Enter the hostname or IP. Port 22 (SSH). Give the session a name in "Saved Sessions" and click Save. Click Open to connect. Accept the host key on first connection. Enter your username and password at the terminal prompt.

## Saved Sessions

Create a saved session for each server you connect to regularly. Load a saved session, modify settings, Save again to update. Organize with folders by using names like "Work/web-server" and "Work/db-server."

## Key Authentication

Use PuTTYgen to generate a key pair. Save the private key as a .ppk file. In PuTTY: Connection → SSH → Auth → Credentials → browse for the private key. On the server, add your public key to `~/.ssh/authorized_keys`. Now you connect without a password.

## Port Tunneling

Connection → SSH → Tunnels. Forward a local port to a remote server:

Source port: `8080`, Destination: `localhost:80`. Click Add. Now `http://localhost:8080` in your browser connects to port 80 on the remote server through the SSH tunnel. Useful for accessing services behind firewalls.

## Appearance

Window → Appearance. Change font (Consolas, 10pt), colors, cursor style. Window → Colours for custom color schemes. Save with your session.
