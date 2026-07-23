---
title: TeraCopy — Speed Up Windows File Transfers
description: Faster copies with pause, resume, error recovery, and file verification.
date: 2026-06-07
category: tutorial
tags: [teracopy, file-transfer, windows, copy]
---

TeraCopy replaces Windows' built-in copy handler with a faster, smarter one.

<!-- app:teracopy -->

## Why TeraCopy?

Windows' built-in copy: no pause, no resume, stops entirely on the first error. TeraCopy: faster buffered transfers, pause/resume anytime, skips problem files and continues, verifies copied files with checksums, and shows a detailed log of what happened.

## Usage

Install and TeraCopy integrates with Explorer — it handles all file copy/move operations automatically. Or use the standalone interface: drag files onto TeraCopy, set the destination, click Copy or Move. The interface shows speed, progress, and any errors.

## Verification

Enable "Test after copy" in Preferences → General. TeraCopy reads back every copied file and compares checksums to ensure a perfect copy. Slower but guarantees file integrity — use for critical backups.

## Error Handling

If a file can't be copied (locked, permissions, disk error), TeraCopy logs it, skips it, and continues. At the end, you see a list of failed files with reasons. Retry failed files with one click after fixing the issue.

## Preferences

- **Use TeraCopy as default copy handler** — All Explorer copies go through TeraCopy
- **Show confirmation dialog** — Ask before each operation
- **Always copy in this folder** — Default destination
