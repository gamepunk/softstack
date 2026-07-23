---
title: AutoHotkey — Automate Anything on Windows
description: Create hotkeys, text expansions, and macros with AutoHotkey. Beginner-friendly automation.
date: 2026-05-10
category: tutorial
tags: [autohotkey, automation, windows, scripting]
---

AutoHotkey lets you automate anything on Windows with simple scripts. Here's how to start.

<!-- app:autohotkey -->

## Your First Script

Install AutoHotkey. Right-click on desktop → New → AutoHotkey Script. Name it `myscript.ahk`. Right-click → Edit Script. Add:

```text
#z::MsgBox "Hello, World!"
```

Double-click the script to run it. Press Win+Z. A message box appears. You've written your first hotkey.

## Useful Hotkeys

```text
; Remap CapsLock to Escape
CapsLock::Esc

; Ctrl+Shift+C to open Calculator
^+c::Run "calc.exe"

; Win+N to open Notepad++
#n::Run "notepad++.exe"

; Middle mouse button to close window
MButton::WinClose "A"
```

## Text Expansion

```text
::@@::myemail@example.com
::addr::123 Main Street, City, ST 12345
::sig::Best regards,{Enter}Your Name
```

Type `@@` followed by space or punctuation, and it expands to your email. Type `sig` and it inserts your signature.

## Window Management

```text
; Win+Left to snap window left
#Left::WinMove "A",, 0, 0, A_ScreenWidth/2, A_ScreenHeight

; Win+Right to snap window right
#Right::WinMove "A",, A_ScreenWidth/2, 0, A_ScreenWidth/2, A_ScreenHeight
```

## Run at Startup

Press Win+R, type `shell:startup`, and place a shortcut to your script in the folder. Your automations run every time Windows starts.

The AutoHotkey forum has thousands of community scripts for everything from gaming macros to window management to clipboard tools.
