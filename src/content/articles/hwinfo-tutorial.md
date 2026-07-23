---
title: HWiNFO — The Ultimate Hardware Monitoring Guide
description: Monitor CPU, GPU, temperatures, and voltages in real-time. Set custom alerts.
date: 2026-06-18
category: tutorial
tags: [hwinfo, hardware, monitoring, diagnostics]
---

HWiNFO provides the most detailed hardware information and monitoring available on Windows.

<!-- app:hwinfo -->

## First Launch

Run HWiNFO. Check "Sensors-only" to open just the monitoring dashboard. The sensors window shows real-time data for CPU, GPU, motherboard, drives, and more — temperatures, voltages, fan speeds, clock speeds, and power consumption. Values update every second.

## Key Metrics

- **CPU Package Temp** — Your CPU's overall temperature. Under load, below 85°C is good
- **GPU Core Temp** — Graphics card temperature. Below 80°C under load
- **CPU Package Power** — How much power the CPU draws. Compare to TDP rating
- **Drive Temperature** — SSDs should stay under 70°C

## Custom Alerts

Click the gear icon next to any sensor → Alert. Set threshold (e.g., CPU temp > 90°C). Choose action: play sound, run a program, or change tray icon color. Essential for catching cooling failures.

## Logging

Click the sheet icon → Start Logging. HWiNFO records all sensor data to a CSV file. Useful for benchmarking, tracking thermal issues over time, or diagnosing intermittent problems.

## System Summary

Run without "Sensors-only" for a full system scan. HWiNFO identifies every component: CPU model/stepping, motherboard BIOS version, RAM timings, GPU driver version. Export to a report file for tech support or build documentation.
