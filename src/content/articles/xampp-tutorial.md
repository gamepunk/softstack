---
title: XAMPP — Local Web Development with Apache, MySQL, and PHP
description: Set up a local server for WordPress, PHP development, and testing in minutes.
date: 2026-06-17
category: tutorial
tags: [xampp, web-development, php, localhost]
---

XAMPP bundles everything you need for local web development into one install.

<!-- app:xampp -->

## First Launch

Open the XAMPP Control Panel. Start Apache (web server) and MySQL (database). Their status turns green. Open a browser to `http://localhost` — you should see the XAMPP welcome page. Your web root is at `C:\xampp\htdocs` (Windows) or `/opt/lampp/htdocs` (Linux).

## Your First PHP Site

Create a folder in htdocs, e.g., `htdocs/myproject`. Create `index.php`:

```php
<?php
echo "Hello, World!";
phpinfo();
?>
```

Open `http://localhost/myproject/`. PHP runs and you see the output.

## phpMyAdmin

Click the Admin button next to MySQL in the control panel, or go to `http://localhost/phpmyadmin`. This is a web-based database manager. Create databases, run SQL, browse tables, import/export data.

## WordPress Setup

Download WordPress, extract to `htdocs/wordpress`. In phpMyAdmin, create a database called `wordpress`. Open `http://localhost/wordpress` — the WordPress installer runs. Enter database name, user `root`, no password. Five minutes to a local WordPress site.

## Configuration

The config files are in `xampp/apache/conf/httpd.conf` and `xampp/php/php.ini`. Common changes: increase `upload_max_filesize` and `memory_limit` for larger projects.
