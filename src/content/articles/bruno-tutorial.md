---
title: Bruno — The Open-Source API Client Developers Love
description: Test REST and GraphQL APIs with Bruno. Git-friendly collections and offline-first design.
date: 2026-06-08
category: tutorial
tags: [bruno, api, developer, testing]
---

Bruno stores API collections as plain text files — no cloud, no accounts. Here's how to use it.

<!-- app:bruno -->

## Creating Your First Request

Create a new collection (a folder on disk). Add a request: choose GET, enter a URL (e.g., `https://jsonplaceholder.typicode.com/posts/1`). Click the play button. The response appears in the right panel — body, headers, status code, and timing.

## Environment Variables

Create an environment (e.g., "Development" and "Production"). Define variables like `baseUrl`. Use `{{baseUrl}}/posts` in your URLs. Switch environments to point at different servers instantly. Variables work in URLs, headers, and body.

## Scripts

Bruno supports pre-request and post-response scripts:

**Pre-request:** Set dynamic headers, generate timestamps, create auth tokens.

**Post-response:** Extract data from responses, set variables for chaining, run assertions:

```javascript
const json = res.getBody();
bru.setVar("userId", json.userId);
```

## Assertions

The "Assert" tab lets you validate responses: status code equals 200, response time less than 1000ms, JSON body contains specific values. Run all assertions with one click.

## Git-Friendly

Collections are plain text files. Commit them to Git alongside your code. Your team always has the latest API definitions. No export/import, no proprietary formats.
