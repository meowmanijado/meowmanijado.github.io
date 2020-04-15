---
title: "Different ways to declare Function in JS"
slug: different-ways-to-declare-function-in-js
date: 2020-01-25
author: meow
tags:
    - Today I Learned
    - JS
---

This is a collection of learnings from Wes Bos course. 👌

**Regular Function**

```js
function doctorize(firstname) {
  return `Dr. ${firstname}`
}
```

**Anon or Anonymous Function**

Function without a name.
```js
function (firstname) {
  return `Dr. ${firstname}`
}
```

**Function Expression**

Function in a variable name.
```js
const doctorize = function (firstname) {
  return `Dr. ${firstname}`
}
```

**Hoisting**

Any function declaration can run before it’s define.

```js
// Working
doctorize(‘wes’);
function doctorize(firstname) {
  return `Dr. ${firstname}`
}

//Not Working
doctorize(‘wes’);
const doctorize = function (firstname) {
  return `Dr. ${firstname}`
}
```

**Arrow Function**
```js
// Regular Declaration
function inchToCM(inches) {
  const cm = inches * 2.54;
  return cm;
}
// Arrow Function Declaration
const inchToCM = (inches) => {
  // Explicit return 
  return inches * 2.54;
}
​
// Implicit return, possible to remove the parenthesi if only one parameter
const inchToCM = inches => inches * 2.54;
​
// Implicit return, if more than one parameter
const add = (a, b = 3) => a + b;
 ```

**Return an object**
```js
function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0
  }
  return baby;
}
​
const makeABaby = (first, last) =>  ({  name: `${first} ${last}`,  age: 0  })
 ```

**IIFE - Immediately Invoked Function Expression**

In JS parenthesis runs first by putting parenthesis in the end.
```js
(function() {
  console.log(‘Running the Anon Function’)
  return ‘You are cool’;
})();
// If there are any parameters
(function(age) {
  return `You are cool ${age}`;
})(10);
 ```

**Methods!!! is simply a function that lives inside of an object**
```js
const wes = {
  name: ‘wes’,
  sayHi: function() {
    return ‘Hey Wes’
  },
  //shorthand
  yellHi() {
    console.log(‘HEY WESSS’)
  },
  // Arrow function
  wisperHi: () => {
    consoles.log(‘hi wess in a mouse’);
  }
}
 ```

**Callback Functions**
```js
//Click callback
<button class=“clickme”>Click me</button>
​
const button = document.querySelector(‘.clickme’)
​
button.addEventListener(‘click’, wes.yellHi);
```
---