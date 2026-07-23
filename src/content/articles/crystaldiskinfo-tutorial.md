---
title: CrystalDiskInfo — Monitor Your Drive Health Before It Fails
description: Read S.M.A.R.T. data, check temperature, and get early warnings for failing drives.
date: 2026-05-20
category: tutorial
tags: [crystaldiskinfo, hardware, ssd, hdd]
---

CrystalDiskInfo shows you exactly how healthy your drives are before they fail.

<!-- app:crystaldiskinfo -->

## Reading the Interface

The main window shows each drive with its health status (Good/Caution/Bad) as a colored bar. Below that, temperature, power-on hours, and total reads/writes. The detailed S.M.A.R.T. attributes list every metric the drive reports.

Green = good. Yellow = caution (plan for replacement). Red = bad (replace immediately).

## Key Metrics to Watch

- **Reallocated Sectors Count** — Bad sectors that have been remapped. Any number above zero on an HDD warrants attention
- **Temperature** — SSDs should stay under 70°C, HDDs under 50°C
- **Power-On Hours** — Total runtime. Use with other metrics for context
- **Wear Leveling Count** (SSDs) — Shows how much life has been used
- **Uncorrectable Sector Count** — Growing numbers mean imminent failure

## Set Up Alerts

Function → Alert Features. Enable temperature alerts (e.g., notify at 55°C for SSDs). Enable health status alerts so you're notified when any drive degrades. CrystalDiskInfo can send email alerts or play a sound.

## Auto-Start

Function → Auto-start options. Enable "Start with Windows." CrystalDiskInfo sits in the system tray showing drive temperatures. Hover for a quick health summary.

## Pro Tip

Run CrystalDiskInfo monthly. A drive going from 100% to 98% health in a month is fine. Dropping 5% in a month means backup now.
