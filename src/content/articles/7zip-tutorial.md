---
title: 7-Zip — Master File Compression on Windows
description: High compression ratios, password-protected archives, and command-line automation with 7-Zip.
date: 2026-05-09
category: tutorial
tags: [7-zip, compression, windows, archive]
---

7-Zip is the free archiver that handles everything. Here's how to use it like a pro.

<!-- app:7-zip -->

## Right-Click Integration

After install, right-click any file or folder. The 7-Zip submenu gives you these options:

- **Add to archive** — Custom compression settings
- **Compress to "name.7z"** — Quick compression with defaults
- **Extract Here** — Extract to current folder
- **Extract to "name\"** — Extract to a new folder

## Best Compression Settings

Archive format: **7z**. Compression level: **Ultra**. Compression method: **LZMA2**. Dictionary size: 64MB (higher = better compression but more RAM). Word size: 64. Solid Block size: 4GB. This gives the best ratio for most files.

## Password Protection

In the Add to Archive dialog, enter a password under Encryption. Check "Encrypt file names" so even the file list isn't visible without the password. Use AES-256 encryption — it's the strongest available.

## Splitting Archives

In "Split to volumes, bytes," enter a size like `100M` to split into 100MB chunks. Useful for email attachment limits or uploading to services with file size caps.

## Creating Self-Extracting Archives

Check "Create SFX archive" in the dialog. This creates a `.exe` that extracts itself without needing 7-Zip installed on the target machine. Great for sharing with non-technical users.

## Command Line

```bash
7z a archive.7z folder/          # Compress
7z x archive.7z                  # Extract with paths
7z l archive.7z                  # List contents
7z t archive.7z                  # Test archive integrity
```
