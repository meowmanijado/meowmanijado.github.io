---
title: "Uses"
author: meow
date: 2020-05-04
slug: uses
fullscreen: false
tags:
    - web development
---

I wrote this thing in case I messed up my machine (which is always happens to me 😓). I'm using MacBook Pro (Retina, 13-inch, Early 2015)
with 23" AOC I2781FH Full HD IPS.

### Desktop Apps
- <a href="https://www.iterm2.com/">iTerm2</a>
- Alfred - replacement for spotlight
- Visual Studio Code - editor
- Slack for communication
- <a href="https://postgresapp.com/downloads.html">PostgreSQL</a>
- Todoist
- Typora Markdown Editor

### Terminal
- I use iTerm2 and <a href="https://github.com/ohmyzsh/ohmyzsh">oh-my-zsh</a> a great combination for terminal!
- I use the theme SpaceGray
- <a href="https://github.com/IBM/plex">IBM Plex Mono Thin</a> for font

### Homebrew
To install PHP, MariaDB and other package I need for development. https://brew.sh/
```bash
// PHP
brew install php
```
```bash
// MariaDB
brew install mariadb
brew services start mariadb
```

### Composer
Dependency Manager for PHP. https://getcomposer.org/download/
```bash
// Once the composer has been successfully installed, you can now access composer using
php composer.phar

// To create a shortcut for php composer.phar
Get the directory of `php composer.phar` and then move to bin folder
mv  /Users/meow/composer.phar /usr/local/bin/composer 
// After that we can now access the php composer.phar with
composer

// Make sure the `~/.composer/vendor/bin` directory is in your system "PATH"
// On ~/.zshconfig edit the export PATH line
export PATH=$HOME/bin:/usr/local/bin:~/.composer/vendor/bin:$PATH
```
```bash
https://packagist.org/packages/friendsofphp/php-cs-fixer
```

### JS Environment
- <a href="https://nodejs.org/en/download/">Node</a>
- Yarn `npm install -g yarn`

### PHP Environment
- I like using <a href="https://laravel.com/docs/7.x/valet">Laravel Valet</a> to configure my NGINX/PHP environment.
```bash
composer global require laravel/valet
valet install
```

```bash
cd code
valet park 
```

### Database 
- PostgreSQL
- MariaDB/MySQL

#### VSCode Extensions
- Night owl theme
- advanced-new-file - patbenatar
- File Utils - steffen leistner - add duplicate function
- php intelephense - php support
- Laravel Artisan - Ryan Naddy
- PHP cs fixer - junstyle
- friendsofphp/php-cs-fixer
- Vetur - Pine Wu
- ESLint - Dirk Baeumer

#### SSH Keys & GitHub
github settings >> ssh and gpg keys

https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh

Note: I will add my config settings, aliases, snippets and settings.json here soon!





