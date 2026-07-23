---
title: Inkscape Basics — Vector Design Without Illustrator
description: Learn the essential tools and workflows in Inkscape, the free vector graphics editor.
date: 2026-06-29
category: tutorial
tags: [inkscape, vector, design, svg]
---

Inkscape is a professional vector graphics editor that uses SVG as its native format. It's free, open-source, and capable of professional work.

<!-- app:inkscape -->

## Installation

```bash
brew install --cask inkscape
```

## The Canvas

When you open Inkscape, you'll see a blank canvas. The toolbar is on the left, tool options at the top, and color palette at the bottom. Right-click the canvas for quick actions.

## Essential Tools

- **Select (F1)** — Click to select, drag to move, click again to rotate/skew
- **Node Edit (F2)** — Edit individual points on a path
- **Rectangle (F4)** — Draw rectangles and squares. Hold Ctrl for squares
- **Ellipse (F5)** — Draw circles and ellipses. Hold Ctrl for circles
- **Text (F8)** — Click to type text, drag to create a text box
- **Bezier (B)** — Draw custom paths with curves

## Working with Shapes

Draw a shape, then use the Node tool (F2) to edit its points. Convert any shape to a path with Path → Object to Path (Shift+Ctrl+C). This unlocks full node-level editing.

## Colors and Gradients

Select an object, then click a color in the palette at the bottom. For gradients, open Object → Fill and Stroke (Shift+Ctrl+F). Choose Linear or Radial gradient and adjust the stops.

## Boolean Operations

Select two shapes and use Path → Union, Difference, Intersection, etc. These combine shapes in different ways — essential for creating complex icons.

## Exporting

File → Export PNG. Choose "Selection" to export only what's selected. For SVG (native format), just save normally. Inkscape files are `.svg` and can be opened by any vector tool or browser.
