---
title: "🔥 TIL: Networking Basics"
slug: networking-Basics
date: 2020-02-10
tags: 
    - Today I Learned
    - Networking
    - Websockets
---
I had a conversation with a friend about their architectural structure on his work, and he mentioned the word **websocket**. I believe I have encoutered this word many times and I used it on one of my projects but still I don't have the full grasp idea of what is it doing.

 

Reference to https://dev.to/iwilsonq/build-real-time-apps-by-learning-websockets-3c9m

 

**Socket** - A **TCP (Transmission Control Protocol) Socket** is and endpint instance defined by the combination of IP address with a port, in the context of either a listening state (a server) or a particular TCP Connection (a client, like your browser).

 

**TCP Connection** - pairing of two sockets.

 

**3 main kinds of transports commonly use in browser web apps**

- **XMLHTTPRequests**, or just HTTP for short. Send a single request and get a single response. These are pretty common
- **Server-Sent Events**, or SSE. Send a long-lived request and be able to stream data from the server. Great for real-time data streaming, particularly when the client doesn't need to send messages back to the server.
- **WebSockets**, the only transport that allows for bidirectional streaming of text and binary data. We'll dive a little further into it.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--ApzTu2NN--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/47j90glrwxk8dv2perdp.png)


In most tutorials that deal with external data, you'll deal with the left-most paradigm's HTTP requests. Actually, all of these flows are initiated with an HTTP request, as shown by the blue arrows.

I don't commonly see articles or tutorials on SSE, but MDN has a good reference in case a one-way data stream sounds intriguing.

The third flow is most interesting to us - it gives us the ability to communicate with the server over a single long-lived connection.

 

**Use Cases for websockets**

1. Social feeds
2. Multiplayer Games
3. Collaborative Editing/Coding
4. Multimedia Chat
