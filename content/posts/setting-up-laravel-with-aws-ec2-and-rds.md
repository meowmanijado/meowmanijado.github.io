---
title: "Setting up Laravel with AWS EC2 and RDS"
description: ""
author: meow
slug: setting-up-laravel-with-aws-ec2-and-rds
date: 2020-03-14
tags:
    - Today I Learned
    - AWS
    - RDS
    - EC2
    - Laravel
---

*Note: This is not an how to ultimate guide, it's my personal documentation how I manage to set this up and for future cheatsheet.*

## Prerequisite
---
- Account to AWS Fre Tier
- Laravel Project Repository
 

## AWS EC2
---
1. Create EC2 instance
2. Select (Free tier eligible) Ubuntu Server 18.04 LTS (HVM), SSD Volume Type
3. Select Next Configure Security Group
4. Select Type: HTTP; Port Range 80
5. I use key pair for additional security
 

> A key pair consists of a public key that AWS stores, and a private key file that you store. Together, they allow you to connect to your instance securely. For Windows AMIs, the private key file is required to obtain the password used to log into your instance. For Linux AMIs, the private key file allows you to securely SSH into your instance.

--
> You have to download the private key file (*.pem file) before you can continue. Store it in a secure and accessible location. You will not be able to download the file again after it's created.

Once the instance already created, you can now access the server using ssh

```
ssh ubuntu@1xx.xx.xx.xxx -i ~/document-path-of-pem-file.pem
```

## Installing Nginx
---
```
sudo apt update
sudo apt install nginx
```

Checking web server
```
systemctl status nginx
```
```bash
Output
● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Fri 2018-04-20 16:08:19 UTC; 3 days ago
     Docs: man:nginx(8)
 Main PID: 2369 (nginx)
    Tasks: 2 (limit: 1153)
   CGroup: /system.slice/nginx.service
           ├─2369 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
           └─2380 nginx: worker process
 ```

Now Nginx appears starterd successfully.

To check on the browser, call the public IP address that you can get on the instance page, then you can see the Welcome to NGINX!

For more detailed instruction I followed this tutorial!

https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04

✏️ *Note to self: Write Nginx cheatsheet for my future self!*

## Installing PHP
---
```bash
sudo apt install php-fpm php-mysql
```
```bash
sudo apt install php7.4-mbstring php7.4-xmlrpc php7.4-soap php7.4-gd php7.4-xml php7.4-cli php7.4-zip
```

## Configure SSH
---
```bash
$ ssh-key-gen
$ cat ~/.ssh/id_rsa.pub
```

Other resources:
https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-1604

https://help.github.com/en/github/authenticating-to-github/error-permission-denied-publickey

 

## Installing composer
___
https://linuxize.com/post/how-to-install-and-use-composer-on-ubuntu-18-04/

 
## Configuring Nginx to Use the PHP Processor
```bash
sudo nano /etc/nginx/sites-available/spartan
```
```bash
server {
        listen 80;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com;
​
        location / {
                try_files $uri $uri/ =404;
        }
​
        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }
​
        location ~ /\.ht {
                deny all;
        }
}
```
 
Enable your new server block by creating a symbolic link from your new server block configuration file (in the `/etc/nginx/sites-available/ directory)` to the `/etc/nginx/sites-enabled/` directory:

 
```bash
sudo ln -s /etc/nginx/sites-available/spartan /etc/nginx/sites-enabled/
 ```

To test your new configuration

 
```bash
sudo nginx -t
 ```

Reload NGINX to make the necessary changes

 
```bash
sudo servince nginx restart
 ```

To test in the browser, create PHP file wit phpinfo();

 
```bash
sudo nano /var/www/spartan/test.php 
```

```php
<?php
​
echo phpinfo();
​
?>
 ```

It should display the PHP info.

🤔 What is the difference of Mysql and MariaDB?

 

Debugging
https://stackoverflow.com/questions/41147609/unable-to-start-the-mysql-server-in-ubuntu

```bash
apt install php7.4-mysql
```
https://stackoverflow.com/questions/37212945/aws-cant-connect-to-rds-database-from-my-machine

https://linuxacademy.com/guide/15653-using-aws-rds-with-laravel-october-cms/