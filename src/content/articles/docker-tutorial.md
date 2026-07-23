---
title: Docker Desktop Without the Headache — A Developer's Setup Guide
description: Get Docker running on macOS, understand the basics, and run your first containerized application in 15 minutes.
date: 2026-07-09
category: tutorial
tags: [docker, containers, developer, devops]
---

Docker lets you run applications in isolated containers — think lightweight VMs that start in seconds. This guide gets you from zero to running your first container.

<!-- app:docker-desktop -->

## Installation

```bash
brew install --cask docker
```

Launch Docker Desktop from Applications. The whale icon in your menu bar means it's running. Verify:

```bash
docker --version
docker run hello-world
```

If you see "Hello from Docker!", you're ready.

## Your First Container

Run a web server in one command:

```bash
docker run -d -p 8080:80 --name my-nginx nginx
```

Now open http://localhost:8080 — you should see the Nginx welcome page.

Breaking down the command:
- `-d` — run in background (detached)
- `-p 8080:80` — map port 8080 on your machine to port 80 in the container
- `--name my-nginx` — give the container a name
- `nginx` — the image to run

## Useful Commands

| Command | What it does |
|---------|-------------|
| `docker ps` | List running containers |
| `docker ps -a` | List all containers |
| `docker stop my-nginx` | Stop a container |
| `docker rm my-nginx` | Remove a container |
| `docker images` | List downloaded images |
| `docker logs my-nginx` | View container logs |
| `docker exec -it my-nginx bash` | Open a shell in the container |

## Docker Compose

For multi-container apps, Docker Compose uses a YAML file. Create `compose.yml`:

```yaml
services:
  web:
    image: nginx
    ports:
      - "8080:80"
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: example
```

Run with:

```bash
docker compose up -d
```

Docker Desktop includes Compose, Kubernetes, and a dashboard for managing everything visually.
