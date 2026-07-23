---
title: Godot Engine — Build Your First Game in 30 Minutes
description: Create a simple 2D platformer with Godot. Learn scenes, nodes, scripting, and exporting.
date: 2026-05-02
category: tutorial
tags: [godot, game-dev, beginner, 2d]
---

Godot is a completely free game engine with no royalties. Let's build a simple 2D platformer to learn the basics.

<!-- app:godot-engine -->

## Setup

Create a new project. Choose a folder and select "Forward+" renderer (or "Compatibility" for older hardware).

## The Node System

Everything in Godot is a Node. Characters, UI, lights — all nodes. Nodes are organized in a tree. The root is the top-level node.

Create your first scene:
1. Scene → New Scene
2. Add a **CharacterBody2D** node (this is the root)
3. Rename it to "Player"

Add a sprite:
1. Right-click Player → Add Child Node → **Sprite2D**
2. In the Inspector, drag an image into the Texture slot
3. Add a **CollisionShape2D** as another child
4. Set its Shape to RectangleShape2D and resize to fit

## Movement Script

Right-click Player → Attach Script. Replace with:

```gdscript
extends CharacterBody2D

var speed = 300

func _physics_process(delta):
    velocity = Vector2.ZERO
    if Input.is_action_pressed("ui_right"): velocity.x += 1
    if Input.is_action_pressed("ui_left"): velocity.x -= 1
    if Input.is_action_pressed("ui_down"): velocity.y += 1
    if Input.is_action_pressed("ui_up"): velocity.y -= 1
    velocity = velocity.normalized() * speed
    move_and_slide()
```

## Add a Platform

Add a **StaticBody2D** node with a **Sprite2D** and **CollisionShape2D** child. Position it below your player. Add a **Camera2D** as a child of Player, enable "Current" in the inspector to follow the player.

## Run It

Press F5 (or click the play button). Select your main scene as the default. Your character should move with arrow keys and collide with the platform.

## Export

Project → Export → Add → Choose your platform (Windows, Mac, Linux). Click Export Project. Godot produces a standalone executable instantly.
