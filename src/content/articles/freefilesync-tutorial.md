---
title: FreeFileSync — Backup and Sync Folders Like a Pro
description: Compare folders, mirror to external drives, and set up automated backups with FreeFileSync.
date: 2026-05-23
category: tutorial
tags: [freefilesync, backup, sync, file-management]
---

FreeFileSync compares folders and synchronizes them. Perfect for backups and keeping machines in sync.

<!-- app:freefilesync -->

## Basic Sync

Select source folder (left) and destination folder (right). Click "Compare." FreeFileSync shows which files differ, which are newer, and which exist on only one side. The sync direction is shown by arrows. Click "Synchronize" to execute.

## Sync Modes

The green gear icon selects the sync mode:
- **Two-way** — Changes on either side sync to the other. Use for active folders
- **Mirror** — Left side overrides right. Use for backups to external drive
- **Update** — Copy new/changed files from left to right. Don't delete anything on right
- **Custom** — Define rules per file/folder

## Filtering

The funnel icon opens the filter dialog. Include/exclude by file type, name pattern, or size. Common filters: exclude `*.tmp`, `node_modules/`, `.git/`. Save filter configurations for reuse.

## Automation

Save your configuration as a `.ffs_batch` file. Then:

**Windows:** Create a .bat file with `FreeFileSync.exe "backup.ffs_batch"` and schedule it in Task Scheduler.

**Mac/Linux:** Create a cron job: `0 2 * * * /Applications/FreeFileSync.app/Contents/MacOS/FreeFileSync backup.ffs_batch`

## RealTimeSync

FreeFileSync includes RealTimeSync — it watches folders and triggers sync automatically when changes are detected. Ideal for continuous backup. Set it to run the batch file whenever files change.
