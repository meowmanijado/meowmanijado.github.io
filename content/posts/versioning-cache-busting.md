---
title: "🔥 TIL: Versioning / Cache Busting"
slug: versioning-cache-busting
date: 2020-02-10
tags:
    - Today I Learned
---
Normally when I want to see the the changes on my compiled assests, I usually add console.log on JS and change the color of the background on CSS.


Gladly, I found out that there is method versionon Laravel Mix where it will automatocally append a unique hash to the filenames of all compiled files.
```php
mix.js('resources/js/app.js', 'public/js')
    .version();
```
Make sure to use the Laravel's gloabal mix function within your views to load the appropriately hashed asset. The mix function will automatically determine the current name of the hashed file:
```html
<script src="{{ mix('/js/app.js') }}"></script>
```

See more reference to https://laravel.com/docs/6.x/mix#versioning-and-cache-busting