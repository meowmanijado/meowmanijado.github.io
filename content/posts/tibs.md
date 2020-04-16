---
title: "TIBS"
description: "Barangay ID system tool for residents management and ID printing."
author: meow
date: 2019-06-20
slug: tibs
fullscreen: false
tags:
    - projects
    - laravel
    - vue
    - tailwind
cover: https://raw.githubusercontent.com/meowmanijado/meowmanijado.github.io/develop/static/images/posts/TIBS.png
---

TIBS is a Barangay System tool to manage residents identity and secure information.

**The system is quite basic:**
- Save the resident information
- Print ID of the resident

That's it!

What I want to cover in this blog is what I unexpected to learn, **communication**.

Most of the developers, working in a company with a hierarchy, they do the task on bullet basis, this is no exemption of me.
I'm used to getting the task list and do the coding quick. It gives me more time to think on the code rather than on the 
domain itself.

Hence, I got the project with do this, do that, worst is it's just given verbally. Until the project became bulky, there are 
features that the client did'nt want to have in the first place.

**Here's the list of what I did:**
- Taking ID picture thru webcam (The client wanted it uploadable instead)
- Fingerprint Scanner (The client doesn't need this)
- API of resident info for the mobile app (I don't know what's this for, I bet the client is not aware on this)

Now, the most important thing that did'nt addressed on the early stage: **THE ID PRINTER!**

It's hard to test if we don't have a printer. So the company have decided to bought a ID Printer on the last minute before the deadline. I went a lot of test prints,
pvc cards, and overtime work. 

That was the moment I learned that communication is really vital, if I could have ask the manager
before the project start what is the main purpose of the system, what are the pain points of the client, why we are builiding this, not just getting the task list. If I think beyond the code,
and get the real purpose, I could lessen the development time and ship the core features of the system early. I learned it
the hard way. Never neglect communicating, personally I have tend to focus on the code because "I'm a programmer", but coding
is more than just a code, it is way of communicating to other people, yet in terms of code.