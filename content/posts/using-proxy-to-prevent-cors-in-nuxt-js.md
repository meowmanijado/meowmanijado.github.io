---
title: "🤯 TIL: Using Proxy to prevent CORS in Nuxt JS"
slug: using-proxy-to-prevent-cors-in-nuxt-js
date: 2020-02-21
tags:
    - Today I Learned
    - CORS
    - Nuxt JS
---
When integrating API to frontend, I always encounter the error No ‘Access-Control-Allow-Origin’ header, because of CORS Policy (Content-Resource Sharring Policy) by default browser forbid sharing of content by another domain.

 

Normally, I make a request to the backend person to allow access control origin on their side

 

Native PHP:
```php
<?php
 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
```
 

Laravel CORS for Laravel:
```bash
composer require fruitcake/laravel-cors
```
 

Fortunately, there is an option to prevent CORS on Nuxt JS

 
```js
nuxt.config.js

{
  modules: [
    '@nuxtjs/axios'
  ],
​
  axios: {
    proxy: true // Can be also an object with default options
  },
​
  proxy: {
    '/api/': 'http://api.example.com',
    '/api2/': 'http://api.another-website.com'
  }
}
```

With that you don't have to bother the backend person to allow access origin.