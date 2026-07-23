---
title: pgAdmin — Manage PostgreSQL Databases Visually
description: Query editor, database browser, backup/restore, and user management with pgAdmin.
date: 2026-06-11
category: tutorial
tags: [pgadmin, postgresql, database, developer]
---

pgAdmin is the standard GUI for PostgreSQL. Here's how to manage databases visually.

<!-- app:pgadmin -->

## Connecting to a Server

Right-click "Servers" → Create → Server. Name it, then under Connection, enter host (localhost for local), port (5432), database, username, and password. Save. The server appears in the browser tree with all databases listed.

## Query Tool

Select a database → Tools → Query Tool (or click the SQL icon). Write and execute SQL queries with syntax highlighting and auto-complete. Results appear in the Data Output tab. The Messages tab shows errors, notices, and row counts. Save frequently-used queries.

## Table Management

Right-click Tables → Create → Table. Define columns with names, data types, and constraints (PRIMARY KEY, NOT NULL, UNIQUE). The SQL tab shows the generated CREATE TABLE statement. Use the Properties tab to view and modify existing tables.

## Backup and Restore

Right-click a database → Backup. Choose format (Custom for pg_restore, Plain for SQL text). Set filename. For restore: right-click database → Restore, select the backup file.

## User Management

Login/Group Roles → Create. Create users with passwords, set privileges (can login, create DB, superuser). Grant table-level permissions in each table's Properties → Security tab.
