# Scope

Scope means where are my variables and functions available to me.

**Global** **scope**

Functions avaiable under `window` object

**Function scope**

When variables are created inside of a function those variiables are only available inside that function 



```
const age = 100;

function go() {
	const age = 200; // shadow variable
	const hair = 'blonde';
	console.log(age);
	console.log(hair);
}

go();

// result
200
'blonde'
```

**Block scope**

```
function isCool(name) {
	let cool;	
	if (name ==e 'wes') {
    cool = true;
  }
  console.log(cool);
  return cool;
}

isCool('wes');
true
```

`var` variables are function scope

`let` and `const` are block scope 

**Scope lookup**

Lexical scoping or static scoping

It doesn't care where it's run, it cares where it's define

**Function scoping**

```
function sayHi(name) {
	function yell() {
		console.log(name.toUpperCase())
	}
	yell();
}

sayHi('test');

//return 
TEST
```



# HOISTING

Allows you to access functions before they've been created

**Function declarations**

```
// WORKING
sayHi();

function sayHi() {
	console.log('HEY');
}
```



**Variable declaration**

```
console.log(age);

var age = 10;

// return 
undefined
```



# CLOSURES

Ability to access a parent level scope from a child scope even the parent scope has been terminated 





`console.dir()`

`console.log()`



`var pic = document.querySelector('.nice')`

`pic.classList.add('open')`

`pic.classList.remove('open')`

`pic.classList.toggle('round')`

Utiliy methods:

`pic.classList.contains('round')` 

To get the list of classname

```
pic.className()

// return 
"open"
```



# THE DOM - BUILD IN AND CUSTOM DATA ATTRIBUTES

Attributes are everything added to the element 

```
pic.alt  = 'Cute Pup' // setter
pic.width = 200 // setter
console.log(pic.alt); // getter

// To create new attribute
pic.setAttribute('wes-is-cool', 'Really cute pup')
console.log(pic.getAttribute('alt'))

// Allows you to add data attribute to the element
data-name
data-dog

const custom = document.querySelector('.custom')
console.log(custom.dataset);
// will return the object of data attributes
```



# THE DOM - CREATING HTML



```
const myParagraph = document.createElement('p')
myParagraph.textContent = 'I am a P'
myParagraph.classList.add('special')

const myImage = document.createElement('img')
myImage.src = "https://umg-src.png"
myImage.classList.add('wrapper')

document.body.appendChild(myParagraph);
```



# THE DOM - HTML from Strings and XSS

*Cross-site scripting* (*XSS*) is a type of computer security vulnerability typically found in web applications



**Different kinds of accessing nodes**

```
el.childNodes
el.firstChild
el.lastChild
el.prevoiusSibling
el.nextSibling
el.parentNode
```



Removing nodes

```
$0.remove()
```



# EVENTS - Event Listener

```
const butt = document.querySelector('.butts');

function handleClick () {
	alert('IT GOT CLICKED!!')
}

butts.addEventListener('click', handleClick)

or 

butts.addEventLister('click', function () {
	alert('IT GOT CLICKED!!')
})

butts.removeEventLister('click', function () {
	alert('IT GOT CLICKED!!')
})
```



Listening for events in multiple selector



`parseFloat()` keeps the decimal `parseInt()` don't



`event.target` the thing that actualy got clicked

`event.currentTarget` the thing that fired event listener

`event.stopPropagation()`stop this event from bubbling up



https://www.w3.org/TR/2003/NOTE-DOM-Level-3-Events-20031107/events.html

![graphical representation of an event dispatched in a DOM tree using the DOM event flow](https://www.w3.org/TR/2003/NOTE-DOM-Level-3-Events-20031107/images/eventflow.png)



`this` keyword refers to whatever the left from the . 



```
photoEl.addEventListener('mouseenter', function (e) {
	console.log(e.currentTarget)
	console.log(this)
})

this = photoEl
```



The downside of using `this` keyword is when we use arrow function then the `this` keyword we're no longer scope 