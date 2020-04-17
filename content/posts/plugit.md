---
title: "Plug It"
description: "Coworking System"
author: meow
date: 2019-06-20
slug: plugit
fullscreen: false
tags:
    - projects
    - laravel
    - vue
    - tailwind
cover: https://raw.githubusercontent.com/meowmanijado/meowmanijado.github.io/develop/static/images/posts/plugit.jpg
---

Plug It is a co-working space & Studio hub for working professionals and university students. 

My friend Chan and ex-colleague has started a business in line of co-working space, he contacted me to
create a system to monitor their daily sales. I'm quite exited about it, this is my first time to create a real-life
system other than ToDo apps, and a successful project built in Laravel.

**Functional Requirements**
- Monitor Time In/Out of customers
- Subscriptions (Yearly, Monthly, Weekly)
- Calculate total payment
- Real-time view of current customers

**Challenge**

```php
/**
* Get the current shift of the office hours.
*
* Since the office's shift is between two days (12pm - 6am),
* we have to use the current time to determine what the shift is.
*
* @return string
*/

private static function shift()
{
    $now = now()->setTime(11, 0, 0);

    /**
        * If the current time is before 12pm, then we'll assume we're
        * still supposed to be looking at yesterday's transactions.
        */
    if (now()->format('H') < 11) {
        $now->subDays(1);
    }

    return $now->format('Y-m-d H:i:s');
}
```


**Other stuff I Learned**

I have'nt experienced deploying a Laravel app before, gladly the internet is 
generous in resources, also, the app needs to be deployed locally but the thing
is Chan wants to accessed the system anywhere
```bash
php artisan serve --host 192.168.1.12 --port 80
```
*Note: Change the host based on your IP Address*

I feel like I have so many stuffs I need to improve, `eloquent` , `queries`, better model
structure and a lot more, but I'm pretty happy with the result, knowing that they actually using
it and the client is happy about it.

---