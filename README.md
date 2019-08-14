# Javascript

# Index

Reference docs
* [Docs Reference: Global_Objects](#docs-reference--global-objects)
* [Docs Reference: ES6, ES7, ES8, ES9](#docs-reference--es6--es7--es8--es9)

Fundamentals (Syntax)
* [Fundamentals: Intro](#fundamentals--intro)
* [Fundamentals - User Input](#fundamentals---user-input)
* [Fundamentals: Var vs Let](#fundamentals--var-vs-let)
* [Fundamentals: Hoisting](#fundamentals--hoisting)
* [Fundamentals: Object Literal Syntax](#fundamentals--object-literal-syntax)
* [Fundamentals: Primitive wrapper objects](#fundamentals--primitive-wrapper-objects)
* [Fundamentals: Error Objects](#fundamentals--error-objects)
* [Fundamentals: Closure](#fundamentals--closure)
* [Fundamentals: Encapsulation](#fundamentals--encapsulation)
* [Fundamentals: Arrow Functions](#fundamentals--arrow-functions)
* [Fundamentals: Bind](#fundamentals--bind)
* [Fundamentals: Class Inheritance](#fundamentals--class-inheritance)
* [Fundamentals: Array Methods](#fundamentals--array-methods)
* [Fundamentals: Promises](#fundamentals--promises)
* [Fundamentals: HTTP Methods & Connection](#fundamentals--http-methods---connection)

Intermediate (In-depth)
* [Intermediate: Functions and Patterns](#intermediate--functions-and-patterns)
    * [Callback](#function-pattern--callback)
    * [Returning function](#function-pattern--returning-function)
    * [Self-defining or Lazy Definition](#function-pattern--self-defining-or-lazy-definition)
    * [Immediate function](#function-pattern--immediate-function)
    * [Immediate object initialization](#function-pattern--immediate-object-init)
    * [Load Time Branching](#function-pattern--load-time-branching)
* [Intermediate: Promise chaining](#intermediate--promise-chaining)
* [Intermediate: Async/Await](#intermediate--async-await)
* [Intermediate: Class vs Prototype](#intermediate--class-vs-prototype)
* [Intermediate: Prototypal OO](#intermediate--prototypal-oo)
* [Intermediate: Object Composition](#intermediate--object-composition)
# Docs Reference: Global_Objects
Global objects or standard __built in objects__ refers to objects in the global scope.

[MDN Docs - Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) 

Non-standard objects won't be listed as shouldn't be used in production.

---

* __Value Properties__
    * `Infinity`
    * `NaN`
    * `undefined`
    * `null` 
    * `globalThis`
--- 

* __Function Properties__
These global functions (are called globally rather that on an object) directly return their results to the caller.
    * `eval()`
    * `isFinite()`
    * `isNaN()`
    * `parseFloat()`
    * `parseInt()`
    * `decodeURI()`
    * `decodeURIComponent()`
    * `encodeURI()`
    * `encodeURIComponent()`

---
* __Fundamental Objects__
Basic objects upon which all other objects are based. 
    * `Object`
    * `Function`
    * `Boolean`
    * `Symbol`
    * `Error`
    * `EvalError`
    * `RangeError`
    * `ReferenceError`
    * `SyntaxError`
    * `TypeError`
    * `URIError`
---
* __Number and Dates__
    * `Number`
    * `BigInt`
    * `Math`
    * `Date`
---
* __Text Processing__ 
    * `String`
    * `RegExp`
---
* __Indexed Collections__
    * [Array](#array_methods)
    * Typed Arrays (int, Uint, float, bigInt)
    
---
* __Keyed Collections (ES6)__
    * Map
    * Set
    * WeakMap
    * WeakSet
---
* __Structured Data__: Objects represent and interact with structured data buffers and data coded using JSON.
    * ArrayBuffer
    * SharedArrayBuffer
    * Atomics
    * DataView
    * JSON
---
* __Control Abstraction Objects (ES6)__
    * Promise
    * Generator
    * GeneratorFunction
    * AsyncFunction
---
* __Reflection__
    * Refect
    * Proxy
---
* __Internationalization__
    * Intl: Additions to the ECMAScript core for language-sensitive functionalities

---
* __WebAssembly__
    * Module
    * Instance
    * Memory
    * Table
    * CompileError
    * LinkError
    * RuntimeError
---
* __Other__
    * arguments
    
# Docs Reference: ES6, ES7, ES8, ES9
 ## ES6 (2015)

[Features: Overview & Comparison](http://es6-features.org/#Constants)

ES6 can't compile directly in browsers, so we need a compiler such as _babel_ from ES6 to ES5.

* __Constants__
* __Scoping__ (without hoisting)
    * Block-Scoped Variables: `let`
    * Block-Scoped Functions definitions
* __Arrow Functions__
    * Expression Bodies
    * Statement Bodies
    * Lexical `this` (__!__)
* __Extended Parameter Handling__
    * Default Parameter Values `function f (x=1)`
    * Rest Parameter `function f (x, y, ...a)`
    * Spread Operator `var other = [1, 2, ...params]`
* __Template Literals__
    * String interpolation and Raw String Access `${var}`
* __Extended Literals__
    * Binary & Octal Literal
    * Unicode String & RegExp Literal
* __Enchanced Regular Expressions__
    * Sticky Matching
* __Enhanced Object Properties__
    * Property Shorthand: `obj = { x, y }`
    * Computed Property Names
    * Method Properties: support for regular and generator functions notation in object property definitions
* __Destructing Assignment__
    * Array Matching
    * Object Matching
        * Shorthand
        * Deep Matching
    * Array and Object default values
    * Parameter Context Matching (Destructing Assignment
    * Fail-Soft Destructing
* __Modules__
    * Value Export/Import
    * Default & Wildcard
* __Classes__
    * Class Definition
    * Class Inheritance
    * Class From Expressions
    * Base Class Access
    * Static Members
    * Getter / Setter
* __Symbol Type__
    * Symbol Type (unique and immutable data type tob eused as an identifier for object properties)
    * Global Symbols
* __Iterators__
    * Iterator & For-Of Operator
* __Generators__
    * Generator Function, iterator Protocol
    * Generator Function, Direct Use
    * Generator Matching
    * Generator Control-FLow
    * Generator Methods
* __Data Structures__
    * Map / Sett
    * WeakMap / WeakSet
    * Typed Arrays
* __New Built-In Methods__
    * Object Property Assignment `Object.assign`
    * Array Element Finding `arr.find` `arr.findIndex`
    * String Repeating `str.repeat`
    * String Searching `str.startsWith` `str.endsWith` `str.includes`
    * Number Type Checking `.isNan()` `.isFinite()`
    * Number Safety Checking `.isSafeInteger()`
    * Number Comparison (Availability of a standard Epsilon value)
    * Number Truncation `Math.trunc`
    * Number Sign Determination `.sign`
* __Promises__
* __Meta-Programming__
    * Proxying
    * Reflection
* __Internationalization & Location__
    * Collation
    * Number Formatting
    * Currency Formatting
    * Date/Time Formatting

 ## ES7 (2016)

They decided to release a new version of ECMAScript every year starting in 2015. A yearly update means no more big releases like ES6.

* Array.prototype.includes()
* Exponentiation operator

 ## ES8 (2017)

* __Async Functions__
    * Async
    * Await
* __Shared memory and atomics__
    * Atomics
    * SharedArrayBuffer
    * [More info](https://2ality.com/2017/01/shared-array-buffer.html)
* Object.values
* Object.entries
* Object.getOwnPropertyDescriptors
* String padding
* Trailing commas in function parameters lists and calls

 ## ES9 (2018)

* [__Asynchronous Iteration__](https://2ality.com/2016/10/asynchronous-iteration.html)
* __Rest/Spread properties__
* __Promise.prototype.finally__
* Template literal revision
* RegExp features
    * [Named capture groups](https://2ality.com/2017/05/regexp-named-capture-groups.html)
    * [Unicode property escapes](https://2ality.com/2017/07/regexp-unicode-property-escapes.html)
    * [Lookbehind assertions](https://2ality.com/2017/05/regexp-lookbehind-assertions.html)
    * [s(dotAll) flag](https://2ality.com/2017/07/regexp-dotall-flag.html)


# Fundamentals: Intro
Few important concepts

 #### Object-Oriented 

Anything you look at in a piece of JavaScript code has a good change of being an object.
Only five primitve types are not objects: _number, string, boolean, null and undefined_. Functions are objets too, they can have properties and methods.

When you define a variable, you are already dealing with objects. First, the variable automatically becomes a _property_ of an internal object known as _Activation Object_ (global object), second, this variable is actually also object-like because it has its own properties (_attributes_). 

There are two types of objets

* _Native_: described in the ECMAScript standard, that can be further categorized as _built in_ or _user-defined_.
* _Host_: defined by the host environment (for example, the browser environment, _window_ and all the DOM objects)

 #### No Classes (Previous to ES6)

You create a blank object when you need one and then start adding interesting members to it. You compose objects by adding primitives, functiosn or other objects to them as their properties, though every objects comes with a few built-in properties already.

 #### Prototypes

JavaScript does have __inheritance__ that can be accomplished in various ways, which usually make use of prototypes.

A __prototype__ is an object and every function you create automatically gets a _prototype_ property that points to a new blank object, that is almost identical to an object created with an object literal or `Object()` constructor, except that its constructor property points to the function you create and not to the build-in `Object()`.
# Fundamentals - User Input
When you ran a javascript script for example with `node script.js <args>` you can access the whole args with `process.argv`.
Your arguments will start from element `[2]`. 

Theres a usefull module for arguments parsing: `yargs`.
# Fundamentals: Var vs Let
 ### Let 

 ##### Block Scope

Variable with its scope being only that code block.

```javascript
if (condition) {
    let shape = "square";
    // some other code
   return shape;
} else {
    // shape doesn't exist here
    return false;
}
```

 ### Var

 ##### Function scope

Lives between function scopes 

```javascript
if (condition) {
    var shape = "square";
    // some other code
   return shape;
} else {
    // shape exists here as undefined
    return false;
}
```


---

 ### Examples

if (true) {
    console.log(v); // Undefined
    console.log(l);
    var v = 2;
    let l = 1;
}

console.log(v);
console.log(l); // Undefined
# Fundamentals: Hoisting
JavaScript enables you to have multiple `var` statements anywhere in a function, and they all act as if the variables were declared at the top of the function. This behaviour is known as _hoisting_. 

As long as a variable is in the same scope (same function), it's considered declared, even when it's used before the `var` declaration (though it will be `undefined`).
# Fundamentals: Object Literal Syntax
You can create objects using your own constructor functions or using some of the built-in constructors such as `Object()`, `Date()`, `String()` and so on.

Two equivalent ways to create two identical objets:

```
// 1. Using literal
let car = { goes: "far" };

// 2. using built-in constructor
let car = new Object();
car.goes = "far";
```

 #### Object Constructor Catch

You have no reason to use the `new Object()` constructor when you can use an object literal, but you might be inheriting legacy code written by others, so you should be aware of one "feature" of this constructor (or yet another reason not to use it). 

`Object()` constructor accepts a parameter and, depending on the value pased, it may decide to delegate the object creation to another built-in constructor and return a different object than you expect (for example if you pass a number, string or boolean...).

Therefore, this behaviour of the `Object()` constructor can lead to unexpected results when the value you pass to it is dynamic and not known until runtime. 

In conclusion, use the simpler and reliable object literal instead.

 #### Custom Constructor Functions

```javascript
var Person = function (name) {
    // behind the scenes

    // create a new object
    // using the object literal
    // var this = {}; 
    // or more like
    // var this = Object.create(Person.prototype);

    // add properties and methods
    this.name = name;
    this.say = function () {
        return " I am " + this.name;
    };

    // return this
};

var adam = new Person("Adam");
adam.say();
```

When you invoke the constructor function with `new`, the following happens inside the function:

* An empty object is created and referenced by `this` variable, inheriting the prototype of the function. 
* Properties and methods are added to the object referenced by `this`.
* The newly created object referenced by `this` is returned at the end implicitly (if no other object was returned explicitly, which of course you can do). 

The result is that any time you call `new Person()` a new function is created in memory. This is obviously inefficient, because the `say()` method doesn't change from one instance to the next. The better option is to add the method of the prototype of Person:

```javascript
Person.prototype.say = function() {
    return "..."
}
```

Remember: __reusable members, such as methods, should go to the prototype__.

 #### Patterns for Enforcing new

If you forget `new` when you invoke a constructor, it's not going to cause syntax or runtime errors but might lead to logical errors and unexpected behavior.

`this` inside the constructor __will point to the global object__ (in browsers, `this` will point to `window`). 

In __strict mode__, `this` will no longer point to the global object.

 #### Self-invoking Constructor

You can check in the constructor wether `this` is an instance of your constructor.

```javascript
function Waffle() {

    if (!(this instanceof Waffle)) {
        return new Waffle();
    }
    this.tastes = 'yummy';
}
```

# Fundamentals: Primitive wrapper objects
The _number, string and boolean_ primitive values have _primitive wrapper objects_ than can be created using the built-in ocnstructors `Number()`, `String()`, `Boolean()`.

Illustrate the difference between a primitive number and a number object

```javascript
// primitive number
let n = 100;
console.log(type of n); // "number"

// Number objects
let nobj = new Number(100);
console.log(typeof nobj); // "object"
```

 #### Advantages

Wrapper objects have some useful properties and methods, for example:


Number Object
* `toFixed()`
* `toExponential()`

String Object
* `substring()`
* `charAt()`
* `toLowerCase()`
* `length`

BUT! The methods work on primitives too, as soon as you invoke a method, the primitive is temporarily converted to an object behind the scenes and behaves as if it were an object. So often there's no reason to use the more verbose wrapper constructors.

One reason to use the wrapper objects is when you want to augment the value and persist state. Because primitives are not objects, they cannot be augmented with properties.
# Fundamentals: Error Objects
JavaScript has a number of built-in error constructos such as:

* `Error()`
* `SyntaxError()`
* `TypeError()`
* more

All of them have the following properties

* name
* message
* extra

# Fundamentals: Closure

 ### What is a Closure?

A closure is the combination of a __function bundled together__ (enclosed) __with references to its surrounding state__ (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

To use a closure, simply define a function inside another function and expose it. To expose a function, return it or pass it to another function.

The inner function will have access to the variables in the outer function scope, even after the outer function has returned.

---

 ### Usage

Closures are frequently used in JavaScript for object __data privacy__, in event handlers and callback functions, and in partial applications, currying, and other functional programming patterns.

> Data privacy is an essential property that helps us program to an interface, not an implementation.

> This is an important concept that helps us build more robust software because implementation details are more likely to change in breaking ways than interface contracts. 

> “Program to an interface, not an implementation.”

---

 ### Examples

 ##### Privileged Methods

In JavaScript, closures are the primary mechanism used to enable data privacy. When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function. You can’t get at the data from an outside scope except through the object’s __privileged methods__. In JavaScript, any exposed method defined within the closure scope is privileged.

```javascript
const getSecret = (secret) => {
  return {
    get: () => secret
  };
};

test('Closure for object privacy.', assert => {
  const msg = '.get() should have access to the closure.';
  const expected = 1;
  const obj = getSecret(1);

  const actual = obj.get();

  try {
    assert.ok(secret, 'This throws an error.');
  } catch (e) {
    assert.ok(true, `The secret var is only available
      to privileged methods.`);
  }

  assert.equal(actual, expected, msg);
  assert.end();
});
```

 ##### Stateful Functions 

Closures can also be used to create __stateful functions__ whose return values may be influenced by their internal state, e.g.:

```javascript
// https://jsbin.com/hitusu/edit?html,js,output

// secret(msg: String) => getSecret() => msg: String
const secret = (msg) => () => msg;

test('secret', assert => {
  const msg = 'secret() should return a function that returns the passed secret.';

  const theSecret = 'Closures are easy.';
  const mySecret = secret(theSecret);

  const actual = mySecret();
  const expected = theSecret;

  assert.equal(actual, expected, msg);
  assert.end();
});
```

 ##### Partial Application

The process of applying a function to some of its arguments. The partially applied function gets returned for later use. In other words, a function that takes a function with multiple parameters and returns a function with fewer parameters. Partial application fixes (partially applies the function to) one or more arguments inside the returned function, and the returned function takes the remaining parameters as arguments in order to complete the function application.

Partial application takes advantage of closure scope in order to fix parameters. You can write a generic function that will partially apply arguments to the target function.

```
// Generic Partial Application Function
// https://jsbin.com/biyupu/edit?html,js,output
// https://gist.github.com/ericelliott/f0a8fd662111ea2f569e

// partialApply(targetFunction: Function, ...fixedArgs: Any[]) =>
//   functionWithFewerParams(...remainingArgs: Any[])
const partialApply = (fn, ...fixedArgs) => {
  return function (...remainingArgs) {
    return fn.apply(this, fixedArgs.concat(remainingArgs));
  };
};


test('add10', assert => {
  const msg = 'partialApply() should partially apply functions'

  const add = (a, b) => a + b;

  const add10 = partialApply(add, 10);


  const actual = add10(5);
  const expected = 15;

  assert.equal(actual, expected, msg);
});
```
# Fundamentals: Encapsulation
Practical example

`module1.js` contains:
```javascript
const A = 'value A';
const B = 'value B';
exports.values = function(){
    return { A: A, B: B };
}
```

`module2.js` contains:
```javasript
const util = require('util');
const A = 'a differente value A';
const B = 'a different value B';
const m1 = require('./module1');

console.log(`A=${A} B=${B} values=${util.inspect(m1.values())}`);
// A=a different value A B=a different value B values={ A: 'value A', B: 'value B'}
console.log(`${m1.A} ${m1.B`)
// undefined undefined

const vals = m1.values();
vals.B = `something different`;

console.log(util.inspect(vals));
// { A: 'value A', B: 'something different' }

console.log(util.inspect(m1.values)));
// { A: 'value A', B: 'value B' }
```
# Fundamentals: Arrow Functions
This is more than the syntatic sugar of replacing the `function` keyword. 
Arrow functions are __lighter-weight__ as well as being easier to read. The lighter weight comes at the cost of changing the value of `this` inside the arrow function. In regular function, `this` has a unique value inside the function, but in an arrow function, `this` has the same value as the scope containing the arrow function.
# Fundamentals: Bind

 ### Creating a bound function

The simplest use of bind() is to make a function that, no matter how it is called, is called with a particular this value. A common mistake for new JavaScript programmers is to extract a method from an object, then to later call that function and expect it to use the original object as its this (e.g. by using that method in callback-based code). Without special care, however, the original object is usually lost. Creating a bound function from the function, using the original object, neatly solves this problem:

```javascript
this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();   
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```
# Fundamentals: Class Inheritance
 ### Example

```javascript
// Class Inheritance Example
// NOT RECOMMENDED. Use object composition, instead.

// https://gist.github.com/ericelliott/b668ce0ad1ab540df915
// http://codepen.io/ericelliott/pen/pgdPOb?editors=001

class GuitarAmp {
  constructor ({ cabinet = 'spruce', distortion = '1', volume = '0' } = {}) {
    Object.assign(this, {
      cabinet, distortion, volume
    });
  }
}

class BassAmp extends GuitarAmp {
  constructor (options = {}) {
    super(options);
    this.lowCut = options.lowCut;
  }
}

class ChannelStrip extends BassAmp {
  constructor (options = {}) {
    super(options);
    this.inputLevel = options.inputLevel;
  }
}

test('Class Inheritance', nest => {
  nest.test('BassAmp', assert => {
    const msg = `instance should inherit props
    from GuitarAmp and BassAmp`;

    const myAmp = new BassAmp();
    const actual = Object.keys(myAmp);
    const expected = ['cabinet', 'distortion', 'volume', 'lowCut'];

    assert.deepEqual(actual, expected, msg);
    assert.end();
  });

  nest.test('ChannelStrip', assert => {
    const msg = 'instance should inherit from GuitarAmp, BassAmp, and ChannelStrip';
    const myStrip = new ChannelStrip();
    const actual = Object.keys(myStrip);
    const expected = ['cabinet', 'distortion', 'volume', 'lowCut', 'inputLevel'];

    assert.deepEqual(actual, expected, msg);
    assert.end();
  });
});
```
# Fundamentals: Array Methods
Elemental and daily used methods for arrays. 

[Array MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

* __object.isArray()__

Deprecate _typeof_ and _instanceof Array_!

---

 #### Loop over - forEach

```javascript 
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
```

 #### Find index
```javascript
var pos = fruits.indexOf('Banana');
// 1
```

 #### Add items - push/

Add to end
```javascript
var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]
```

Add to beggining
```javascript
var newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"];
```

Add to Index (items params)
```javascript
var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

 #### Remove items - splice/pop

Remove with index
```javascript
var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

Remove from end
```javascript
var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];
```


Remove from beggining
```javascript
var first = fruits.shift(); // remove Apple from the front
// ["Banana"];
```

 #### Copy - slice/spread operator

Using slice
```javascript
var shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]
```


--- 

 ### Other usefull methods

 #### Mutators 

`Array.prototype.reverse()`
Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.

`Array.prototype.sort()`
Sorts the elements of an array in place and returns the array.

 #### Accessors 

These methods do not modify the array and return some representation of it.

`Array.prototype.concat()`
Returns a new array that is this array joined with other array(s) and/or value(s).

`Array.prototype.includes()`
Determines whether an array contains a certain element, returning true or false as appropriate.

`Array.prototype.indexOf()`
Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.

`Array.prototype.join()`
Joins all elements of an array into a string.

`Array.prototype.lastIndexOf()`
Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.

`Array.prototype.slice()`
Extracts a section of an array and returns a new array.

 #### Iterators 

`Array.prototype.entries()`
Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

`Array.prototype.every()`
Returns true if every element in this array satisfies the provided testing function.

`Array.prototype.filter()`
Creates a new array with all of the elements of this array for which the provided filtering function returns true.

`Array.prototype.find()`
Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.

`Array.prototype.findIndex()`
Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.

`Array.prototype.map()`
Creates a new array with the results of calling a provided function on every element in this array.

`Array.prototype.reduce()`
Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.

`Array.prototype.reduceRight()`
Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.

`Array.prototype.some()`
Returns true if at least one element in this array satisfies the provided testing function.

 ### Using generic Array Methods for other types as Strings 

Not part of EcmaScript
```javascript
if (Array.every(str, isLetter)) {
  console.log("The string '" + str + "' contains only letters!");
}
```

Standard alternative, convert to array
```javascript
if (Array.from(str).every(isLetter)) { 
  console.log("The string '" + str + "' contains only letters!"); 
}
```
# Fundamentals: Promises
Deferred and asynchronous computations.

Two idiomatic conventions:
1. The last argument to an asynchronous function is a callback function, which is calle when asynchronous execution is to be performed.
2. The first argument to the callback function is an error indicator. 

With `Promise` class, rather than passing in a callback function, the caller receives a `Promise` object.

```javascript
doThis(arg1, arg2)
.then(result => {
    // This can receive only one value, hence to
    // recieve multiple values requires an objet or array
    return doThat(arg2, arg3);
})
.then((results) => {
    return doSomethingElse(arg5);
})
.then(() => {
    // Do a final something
})
.catch(err => {
    // errors land here
});
```

The `async`/`await` feature implements the promise of the `Promise` class to simplify asynchronous coding.

```javascript
async function mumble() {
    // async magic happens here 
}
```

```javascript
const mumble = async () => {
    // async magic happens here
}
```

It's used as so:

```javascript
async function doSomething(arg1, arg2, arg3, arg4, arg5) {
    var { result1, result2 } = await doThis(arg1, arg2);
    var results = await doTat(arg3, arg4);
    await doSomethingElse(arg5);
    return finalResult;
```
# Fundamentals: HTTP Methods & Connection
---

 ## Fake API for Test 

Test your HTTP request here! 

[JSON Placeholder](https://jsonplaceholder.typicode.com/)


 ## Axios

Promised based HTTP client for the browser and node.js

```bash
$ npm install axios
```

Visit the [Github repo](https://github.com/axios/axios) for more info and __examples__.

 ##### Features 

* Make XMLHttpRequests from the browser
* Make http requests from node.js
* Supports the Promise API
* Intercept request and response
* Transform request and response data
* Cancel requests
* Automatic transforms for JSON data
* Client side support for protecting against XSRF

# Intermediate: Functions and Patterns

* _first-class objects_ (IMPORTANT)
* they provide __scope__ (IMPORTANT)
* can be created __dynamically at runtime__
* cna be assigned to variables
* can have references copied to other variables
* can be augmented and most of them deleted
* can be passed as arguments to other functions 
* can be returned by other functions
* can be their own properties and methods

__Scope__ it's an important feature, because in JavaScript there's no curly braces local scope, in other words, blocks don't create scope. There's only __function scope__. any variable defined with `var` inside of a function is a local variable, invisible outside the function (`let` give us a different workaround this).

 #### Function scope 

```javascript
// global scope
function foo() {}

funtion local() {
    // local scope
    function bar() {}
    return bar;
}
```

 #### Function's name Property

```javascript
function foo() {} // declaration
var baz = function() {}; // expression
var baz = function baz() {}; // named expression

foo.name; // 'foo'
bar.name; // ''
baz.name; // 'baz'
```

 #### Function Hoisting

Different hoisting behavior between function declarations and named function expression, but with a Gotcha!

As functions are just objects assigned to variables, when using a function declaration, the definition of the function also gets hoisted, not only its declaration.

---

 ### Patterns

Following sections explain good patterns related to functions that JavaScript has to offer, starting with the callback pattern. Again, it's important to remember the two special features of the functions in JavaScript

* Functions are __objects__
* Functions provide __local scope__

1. __API Patterns__: which help you provide better and cleaner interfaces to your functions.
    * Callback
    * Returning functions
    * Currying and configuration

2. __Initialization Patterns__
    * Immediate functions
    * Immediate object initialization
    * Init-time / Load-time branching

3. __Performance Patterns__ 
    * Memoization
    * Self-defining functions
# Function Pattern: Callback
As functions are objects, they can be passed as __arguments to other functions__.

```javascript
function writeCode(callback) {
    // do something
    callback();
}

function introduceBugs() {
    // ... make bugs
}

writeCode(introduceBgs);
```

Notice how `introduceBugs()` is passed as an argument to `writeCode()` without the parentheses. Parentheses execute a function whereas in this case we want to pass only a reference to the function and let `writeCode()` call it back when appropiate.

 ### Callback example

Let's take an example and start without a callback first and then refactor later. 

```javascript
let findNodes = function () {
    let i = 10000, // big heavy loop
        nodes = [], // store the result
        found; // the next node found
    while (i) {
        i -= 1;
        // complex logic here...
        nodes.push(found)
    }
    return nodes;
};
```

It's a good idea to keep this function generic and have it simply return an array of DOM nodes, without doing anything with the actual elements.

The logic of modifying nodes coud be in a different function, for example a function called `hide()` which, as the name suggest, hides the nodes from the page:

```javascript
let hide = function (nodes) {
    let i = 0, max = nodes.length;
    for(; i < max; i+= 1) {
        nodes[i].style.display = "none";
    }
};

hide(findNodes());
```

This implementation is inefficient, because `hide()` has to loop again through the array of nodes returned by `findNodes()`. It would be more efficient if you could avoid this loop and hide the nodes as soon as you select them in `findNodes()`. But if you implement the hiding logic in `findNodes()`, it will no longer be a generif function because of the _coupling_ of the retrieval and modification logic.

Enter the callback pattern, you pass your node hiding logic as a callack function and delegate its execution.

```javascript
let findNodes = function (callback) {
    let i = 100000,
        nodes = [],
        found;
    
    // check if callback is callable
    if (typeof callback !== 'function') {
        callback = false;
    }
    
    while (i) {
        i -= 1;
        
        // complex logic here..
        
        // now callback
        if (callback) {
            callback(found);
        }
        
        nodes.push(found);
    }
    return nodes;
};

let hide = function(node) {
    node.style.display = "none";
};

findNodes(hide);
```

You can also use an anonymous function as callback

```javascript
findNodes(function (node) {
    node.style.display = "block";
});
```

 ### Callbacks and Scope

There are often scenarios where the callback is not one-off anonymous functiion or a global function, but it's a method of an object. If the callback method uses `this` to refer to the object it belongs to, it might cause unexpected behavior.

The solution to this proble mis to pass the callback function and in addition pass the object this callback belongs to.

```javascript
let findNodes = function (callback, callback_obj) {
    // ...
    if (typeof callback === 'function') {
        callback.call(callback_obj, found);
    }
    // ...
};
```

You have another workarounds for this with Arrow Functions, binding and using `call()` and `apply()`.

 ### Asynchronous Event Listeners

When you attach an event listener to an element on a page, you're actually providing a pointer to a callback function that will be called when the event occurs. Example:

```javascript
document.addEventListener('click', console.log, false);
```

JavaScript is especially suited for event-driven programming, because of the callback pattern, which enables your programs to work __asynchronously__, in other words, out of sequential order.

> Don't call us, we'll call you

 ### Timeouts

Another example of the callback pattern is when you use the timeout methods provided by the brower's window object: `setTimeout()` and `setInterval()`, that also accept and execute callbacks.
# Function Pattern: Returning Function
Functions are objects, so they can be used as return value. A function can return another more specialized function, or it can create another function on demand, depending on some inputs.

Example:

```javascript
let setup = function () {
  let count = 0;
  return function () {
    return (count += 1);
  };
};

// usage
let next = setup();
next(); // 1
next(); // 2
next(); // 3
```

Because `setup()` wraps the returned function, it creates a closure, and you can use this closure to store some private data, which is accesible by the returned function but not to the outside code.
# Function Pattern: Self-Defining or Lazy definition
Another name for this pattern is __lazy function definition__.

Functions can be defined dynamically and can be assigned to variables. A function can overwrite and redefine itself with a new implementation.

This ppatern is __usefull when your function has some initial preparatory work to do and it needs to do it only once__. Using this pattern can obviously help with the performance of your application, because your redefined function simply does less work.

A drawback of these pattern is that any properties you've previously added to the original function will be lost when it redefines itself. Also if the function is used with a different name, for example, assigned to a different variable or used as a method of an object, then the redefinition part will never happen and the origianl function body will be executed, as the overwritten will happen to the global function, but the variables will keep seeing the old definition.

```javascript
let scareMe = function () {
  alert('Boo!');
  scareMe = function () {
    alert('Double boo!');
  };
};

scareMe(); // Boo!
scareMe(); // Double Boo!
```
# Function Pattern: Immediate Function
Execute a function as soon as it is defined. This term is not defined in the ECMAScript standard, but it's short and helps describe and discuss the pattern.

```javascript
(function() {
  alert('watch out!');
}());
```

This pattern is useful because it provides a scope _sandbox_ for your initialization code. For example, your code has to perform some setup tasks when the page loads, such as attaching event handlers, creating objects, and so on. All this work needs to be done only once, so there's no reason to create a reusable named function. But the code also requires some temporary variables ,which you won't need after the initialization phase is complete. It would be a bad idea to create all those variables as globals. That's why you need an immediate function, to wrap all your code in its local scope and not leak any variables in the global scope.

 #### Parameters of an Immediate Function

You can also pass arguments to immediate functions, as the following example demonstrates

```javascript
(function (who, when) {
  console.log(`I met ${who} on ${when}`)
}('Joe Black', new Date()))
```

```javascript
(function (global) {
  // access the global object via 'global'
}(this));
```

 #### Returned Values from Immediate Functions

You can omit the parentheses that wrap the function.

```javascript
let result = function () {
  return 2 + 2;
}();
```

You can also return antoher function!

```javascript
let getResult = (function() {
  let res = 2 + 2;
  return function () {
    return res;
  };
}());
```

Immediate functions can also be used when you define object properties. Imagine you need to define a property that will likely never change during the life of the object, but before you define it a bit of work needs to be performed to figure out the riht value.

```javascript 
let o = {
  message: (function () {
    let who = "me",
        what = "call";
    return `${what} ${who}`;    
  }()),
  getMsg: function () {
    return this.message;
  }
};

// usage
o.getMsg(); // "call me"
o.message; // "call me"
```

 #### Benefits and Usage

Immediate function pattern is widely used. It helps you wrap an amount of work you want to do without leaving any global variables behind. All the variables you define will be local to the self-invoking funtions and you don't have to worry about polluting the global space with temporary variables.

The pattern also enables you to wrap individual features into self-contained modules.
# Function Pattern: Immediate object init
Another way to protect from global scope pollution. This pattern uses an object with an `init()` method, which is executed immediately after the object is created, that takes care of all initialization tasks.

```javascript
({
  // configuration constants
  max_width: 600,
  max_height: 400,
  
  // utility methods
  gimmeMax: function () {
    return `${this.max_width}x${this.max_height}`
  },

  // initialize
  init: function () {
    console.log(this.gimmeMax());
    // more init tasks...
  }
}).init();

// '600x400'
```

Both of these works:
```javascript
({...}).init();
({...}.init());
```

 #### Benefits

The same as the _immediate function pattern_, you protect he global namespace while performing the one-off initialization tasks. It may look a little more involved in terms of syntax compared to just wrapping a bunch of code in an anonymous function, but if your initialization tasks are more complicated, it adds structure to the whole initialization procedure. 

 #### Drawback 

Most JavaScript minifiers may not minify this pattern as efficiently as the code simply wrapped into a function. The private properties and methods will not be renamed to shorter names because, from a minifier's point of view, it's not trivial to do so safely. At the moment of writing, Google's Closure Compiler in 'advanced' mode is the only minifier that renames the immediate object's properties to shorter names.

 #### Note

This pattern is mainly suitable for one-off tasks, and there's no access to the object after the init() has completed. If you want to keep a reference to the object after it is done, you can easily achieve this by adding `return this;` at the end of the `init()`.
# Function Pattern: Load Time Branching
Also called _Init-Time Branching_, is an optimization pattern.

When you know that a certain condition will not change throughout the life of the proram, it makes sense to test the condition only once. Browser sniffing (or feature detection) is a typical example. For example, after you've sniffe that `XMLHttpRequest` is supported as a native object, there's no chance that the underyling browser will change in the middle of your program execution and all of a sudden you'll need to deal with ActiveX objects.

Figuring out the computed styles of a DOM elemento r attaching event handlers are other candidates that can be benefit from the _init-time branching pattern_.

 #### Benefits

Using _load-time branching_, you sniff the browser features once, during the initial loading of the script. At that time, you redefine how the function will work throughout the lifespan of the page.

```javascript
// interface
let utils = {
  addListener: null,
  removeListener: null
};

// implementation
if (window.addEventListener) {
  utils.addListener = function (el, type, fn) {
    el.addEventListener(type, fn, false);
  };
  utils.removeListener = function (el, type, fn) {
    el.removeEventListener(type, fn, false);
  };
} else if (document.attachEvent) {
  // IE
  utils.addListener = function (el, type, fn) {
    el.attachEvent(`on${type}`, fn);
  };
  utils.removeListener = function (el, type, fn) {
    el.detachEvent(`on${type}`, fn);
  };
} else {
  // old browsers
  utils.addListener = function (el, type, fn) {
    el[`on${type}`] = fn;
  };
  utils.removeListener = function (el, type, fn) {
    el[`on${type}`] = null;
  };
}
```

 #### Disclaimer

Here is the moment to mention a word of caution against browser sniffing. When you use this pattern, don't over-assume browser beatures. For example, if you've sniffed that the browser doesn't support window.addEvent
, don't just assume he browser you're dealing with is IE and it doesn't support `XMLHttpRequest` natively either
# Function Pattern: Memoization
Functions are objects, so they can have properties. In fact, they do have properties and methods out-of-the-box. 

For eample, every function, no matter what syntax you use to create it, automatically gets a `length` property containing the number of arguments the function expects.

```javascript
function func(a, b, c) {}
console.log(func.length); // 3
```

You can add custom properties to your functions at any time. One use case for custom properties is to __cache the results__, so the next time the function is called, it doesn't have to redo potentally heavy computation. This is also known as __memoization__.

In the following example, the function `myFunc` creates a property `cache`, accesible as usual via `myFunc.cache`. This property is an object (a hash) where the parameter `param` passed to the function is used as a key and the result of the computation is the value.

```javascript
let myFunc = function (param) {
  if (!myFunc.cache[param]) {
    let result = {};
    // ... expensive operation ...
    myFunc.cache[param] = result;
  }
  return myFunc.cache[param];
};
```

The preceding code assumes that the function takes only one argument `param` and it's a primitive data type. If you have more parameters and more complex ones, a generic solution would be to serialize them. For example, you acn serialize the arguments object as a JSON string, and use that string as a key in your `cache` object:

```javascript
let myFunc = function () {
  let cachekey = JSON.stringify(Array.prototype.slice.call(arguments)),
      result;
   
  if (!myFunc.cache[cachekey]) {
    result = {};
    // ... expensive operation ...
    myFunc.cache[cachekey] = result;
  }
  return myFunc.cache[cachekey];
};

// cache storage
myFunc.cache = {}
```
Be aware that in serialization, the "identify" of the objects is lost, so if you have two differents objects that happen to have the same properties, both will share the same cache entry.
# Function Pattern: Configuration Objects
The _configuration object pattern_ is a way to provide cleaner APIs, especially if you're building a library or any other code that will be consumed by other programers.

It often happens that you start working with some requirements in mind, but more functionality gets added afterward. Functions' signature might change, the callers of the function will have to pass different parameters and be careful not to mix the order. In conclusion, passing a large number of parameters is not convenient. A better approach is to substitute all the parameters with only one and make it anobject, let's call it `conf`. 

```
var conf = {
    username: 'batman'
    first: 'Bruce',
    last: 'Wayne'
}
```

 #### Pros 

* No need to remember the parameters and their order
* You can sefely skip optional parameters
* Easier to read and maintain
* Easier to add and remove parameters

 #### Cons

* You need to remember the names of the parameters
* Property names cannot always be safely minified, especially by simpler minifiers

This pattern could be sefulw hen your function creates DOM elements, for example, or in setting the CSS styles for an element, because elements and styles can have a great number of mostly optional attributes and properties.
# Function Pattern: Currying
Currying and _partial_ function application. 

> The process of making a function understand and handle partial application is called currying.

 ### Funciton Application
In some purely functional programming languages, a function is not described as being _called_ or _onvoked_ but rather it's _applied_. In JavaScript, we can apply a function using the method `Function.prototype.apply()`, because functions in JavaScript are actually objects and they have methods. 

Example of a function application
```javascript
// define a function
let sayHi = function (who) {
  return `Hello${who ? `, ${who}` : ''}!`;
};

// invoke a function
sayHi(); // 'Hello!'
sayHi('world'); // 'Hello, world!'

// apply a function
sayHi.apply(null, ['world']); // 'Hello, world!'
```

As you can see in the example, both _invoking_ and _applying_ have the same result, though `apply()` takes two parameters: __the first one is an object to bind to `this` inside of the function__, the second is an array of arguments. 

If the first parameter is `null`, then `this` points to the global object.

It turns out that what we think of calling a function is not much more than a syntatic sugar, equivalent to a function application. 

Note that in addition to `apply()`, there's a `call()` method of the `Function.prototype` object, but it's still just syntax sugar on top of `apply()`. 

 ### Partial Application

When you perform a partial application you don't get a result (solution), but you get another function instead. 

The next snippet demonstrates the use of an imaginary partialApply() method:

```javascript
// Imaginary, not valid javascript
let add = function (x, y) {
    return x + y;
};

// full application
add.apply(null, [5, 4]); // 9

// partial application
var newadd = add.partialApply(null, [5]);
// applying an argument to the new function
newadd.apply(null, [4]); // 9
```

 ### Currying

Comes from the name of the mathematician Haskell Curry. 

Currying is a __transformation process_, we transform a function. Other functional languages may have that built intothe language itself, and all functions are curried by default. In JavaScript we can modify the `add()` function into a currid one that will handle partial application.

Let's take an example
```javascript
// a curried add()
// accepts partial list of arguments
function add(x, y) {
  let oldx = x,
      oldy = y;
      if (typeof oldy === 'undefined') {
        // partial
        return function (newy) {
          return oldx + newy;
        };
      }
      // full application
      return x + y;
}

// test
typeof add(5); // 'function'
add(3)(4); // 7

// create and store a new function
let add2000 = add(2000);
add2000(10); // 2010
```

In this snippet, the first time you call `add()`, it creates a closure around the inner function it returns. The closure stores the original values x and y into private variables `oldx` and `oldy`. The first one, `oldx`, is used when the inner function executes. If there's no partial application and both x and y are passed, the function proceeds to simply add hem.

A less verbose version is shown in the next snippet.

```javascript
// a curried add()
// accepts partial list of arguments
function add(x, y) {
      if (typeof y === 'undefined') {
        // partial
        return function (y) {
          return x + y;
        };
      }
      // full application
      return x + y;
}
```

 #### General purpose currying function

```javascript
function schonfinkelize(fn) {
  let slice = Array.prototype.slice,
      stored_args = slice.call(arguments, 1);
  return function () {
    let new_args = slice.call(arguments),
        args = stored_args.concat(new_args);
    return fn.apply(null, args);
  };
}
```

The `schonfinkelize()` function is probably a little more complicated than it should be, only because arguments is not a real array in JavaScript.

Now we can use this general-purpose way of making any function curried:

```javascript
function add(x, y) {
  return x + y;
}

var newadd = schonfinkelize(add, 5);
newadd(4); // 9
```

This transformation is not limited to single parameters or to single-step currying. 

```javascript
function add(a, b, c, d, e) {
  return a + b + c + d + e;
}

schonfinkelize(add, 1, 2, 3)(5, 5); // 16
```

 ### When to use Currying

When you find yourself calling the same function and passing mostly the same parameters, then the function is probably a cood candidate for currying.

You can create a new function dynamically by partially applying a set of arguments to your function. This new function will keep the repeated parameters stored (so you don't have to pass them every time), and will use them to pre-fill the full list of arguments that the original function expects.
# Intermediate: Promise chaining
Define promise
```
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000)
  })
}
```

Normal Nested-Promises
```
add(1, 2).then((sum) => {
  console.log(sum);

  add(sum, 4).then((sum2) => {
    console.log(sum2)
  }).catch((e) => {
    console.log(e)
  })

}).catch((err) => {
  console.log(err)
})
```

Promise chaining
```
add(1, 2)
.then((sum) => {
  console.log(sum)
  return add(sum, 4)
})
.then((sum2) => {
  console.log(sum2)
})
.catch((e) => {
  console.log(e)
})
```
# Intermediate: Async/Await
Work smarter with Promises!

Async functions return a Promise:
```javascript
const doWork = async () => {}
console.log(doWork()) 
// Promise { undefined }
```

Demo
```
// Example Promise
const divide = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b == 0) {
        return reject('Divider must be different than ZERO')
      }
      const result = a / b
      console.log(result)
      resolve(result)
    }, 1000)
  })
}

// Async-Await instead of promise chaining
const doWork = async () => {
  const division0 = await divide(20, 2)
  const division1 = await divide(division0, 2)
  const division2 = await divide(division1, 2)
  return division2
}

doWork()
  .then((result) => {console.log('Done')})
  .catch((e) => {console.log(e);})
```
# Intermediate: Class vs Prototype
Unlike most other languages, JavaScript’s object system is __based on prototypes, not classes__.

 ### Difference between Class & Prototypal Inheritance?

 ##### Class Inheritance

__Class Inheritance: A class is like a blueprint — a description of the object to be created__. Classes inherit from classes and __create subclass relationships__: hierarchical class taxonomies.

> Class inheritance creates parent/child object taxonomies as a side-effect.

Instances are typically instantiated via constructor functions with the `new` keyword. Class inheritance may or may not use the `class` keyword from ES6. Classes as you may know them from languages like Java don’t technically exist in JavaScript. Constructor functions are used, instead. The ES6 `class` keyword desugars to a constructor function:

```
class Foo {}
typeof Foo // 'function'
```

> In JavaScript, class inheritance is implemented on top of prototypal inheritance, but that does not mean that it does the same thing.

JavaScript’s class inheritance uses the prototype chain to wire the child `Constructor.prototype` to the parent `Constructor.prototype` for delegation. Usually, the `super()` constructor is also called. Those steps form __single-ancestor parent/child hierarchies__ and create the tightest coupling available in OO design.

 ##### Prototype Inheritance

__Prototypal Inheritance: A prototype is a working object instance__. Objects inherit directly from other objects.

Instances may be composed from many different source objects, allowing for easy selective inheritance and a flat [[Prototype]] delegation hierarchy. In other words, __class taxonomies are not an automatic side-effect of prototypal OO: a critical distinction__.

Instances are typically instantiated via factory functions, object literals, or `Object.create()`.

 ### Problems in OO Design with Classes

Class inheritance creates parent/child object taxonomies as a side-effect.

Those taxonomies are virtually impossible to get right for all new use cases, and widespread use of a base class leads to __the fragile base class problem__, which makes them difficult to fix when you get them wrong.

__Common OO Design problems__:

* The tight coupling problem (class inheritance is the tightest coupling available in oo design), which leads to the next one…
* The fragile base class problem
* Inflexible hierarchy problem (eventually, all evolving hierarchies are wrong for new uses)
* The duplication by necessity problem (due to inflexible hierarchies, new use cases are often shoe-horned in by duplicating, rather than adapting existing code)
* The Gorilla/banana problem (What you wanted was a banana, but what you got was a gorilla holding the banana, and the entire jungle)

> “…the problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.” ~ Joe Armstrong — “Coders at Work”

 ### Composition vs Inheritance 

When people say “favor composition over inheritance” that is short for “favor composition over __class__ inheritance” (the original quote from “Design Patterns” by the Gang of Four). This is common knowledge in OO design because class inheritance has many flaws and causes many problems. Often people leave off the word class when they talk about class inheritance, which makes it sound like all inheritance is bad — but it’s not.
# Intermediate: Prototypal OO
As you’re probably starting to realize, __concatenative inheritance is the secret sauce__ that enables object composition in JavaScript, which makes both prototype delegation and functional inheritance a lot more interesting.

 ### Three types

 ##### Concatenative inheritance 

The process of inheriting features directly from one object to another by copying the source objects properties. In JavaScript, source prototypes are commonly referred to as mixins. Since ES6, this feature has a convenience utility in JavaScript called `Object.assign()`. Prior to ES6, this was commonly done with Underscore/Lodash’s `.extend()` jQuery’s `$.extend()`, and so on… The composition example above uses concatenative inheritance.

 ##### Prototype delegation
In JavaScript, an object may have a link to a prototype for delegation. If a property is not found on the object, the lookup is delegated to the delegate prototype, which may have a link to its own delegate prototype, and so on up the chain until you arrive at `Object.prototype`, which is the root delegate. This is the prototype that gets hooked up when you attach to a `Constructor.prototype` and instantiate with `new`. You can also use `Object.create()` for this purpose, and even mix this technique with concatenation in order to flatten multiple prototypes to a single delegate, or extend the object instance after creation.

 ##### Functional inheritance
In JavaScript, any function can create an object. When that function is not a constructor (or `class`), it’s called a __factory function__. Functional inheritance works by producing an object from a factory, and extending the produced object by assigning properties to it directly (using concatenative inheritance). Douglas Crockford coined the term, but functional inheritance has been in common use in JavaScript for a long time.

 ### You think you know Prototypes...

If you were taught to build classes or constructor functions and inherit from those, what you were taught was not prototypal inheritance. You were taught how to mimic class inheritance using prototypes.

 ### Deep dive!

[Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
# Intermediate: Object Composition
Inherit just the stuff you really need using object composition. 

 ### Example

```javascript
// Composition Example

// http://codepen.io/ericelliott/pen/XXzadQ?editors=001
// https://gist.github.com/ericelliott/fed0fd7a0d3388b06402

const distortion = { distortion: 1 };
const volume = { volume: 1 };
const cabinet = { cabinet: 'maple' };
const lowCut = { lowCut: 1 };
const inputLevel = { inputLevel: 1 };

const GuitarAmp = (options) => {
  return Object.assign({}, distortion, volume, cabinet, options);
};

const BassAmp = (options) => {
  return Object.assign({}, lowCut, volume, cabinet, options);
};

const ChannelStrip = (options) => {
  return Object.assign({}, inputLevel, lowCut, volume, options);
};


test('GuitarAmp', assert => {
  const msg = 'should have distortion, volume, and cabinet';
  const level = 2;
  const cabinet = 'vintage';

  const actual = GuitarAmp({
    distortion: level,
    volume: level,
    cabinet
  });
  const expected = {
    distortion: level,
    volume: level,
    cabinet
  };

  assert.deepEqual(actual, expected, msg);
  assert.end();
});

test('BassAmp', assert => {
  const msg = 'should have volume, lowCut, and cabinet';
  const level = 2;
  const cabinet = 'vintage';

  const actual = BassAmp({
    lowCut: level,
    volume: level,
    cabinet
  });
  const expected = {
    lowCut: level,
    volume: level,
    cabinet
  };

  assert.deepEqual(actual, expected, msg);
  assert.end();
});

test('ChannelStrip', assert => {
  const msg = 'should have inputLevel, lowCut, and volume';
  const level = 2;

  const actual = ChannelStrip({
    inputLevel: level,
    lowCut: level,
    volume: level
  });
  const expected = {
    inputLevel: level,
    lowCut: level,
    volume: level
  };

  assert.deepEqual(actual, expected, msg);
  assert.end();
});
```
# Intermediate: Object Creation Patterns
Creating objects in JavaScript is easy:
* Object literals
* Constructor functions

Here, you will take a look at:
* namespacing
* dependency declaration
* module pattern
* sandbox patterns

These will help you organize and structure your application code, and mitigate the effect of the implied globals.

Other topics of discussion include:
* private and privileged members
* static and private static members
* object constants
* chaining
* one class-inspired way to define constructors

The following sections, I will make reference to Object Creation Pattern as __OCP__.
# OCP: Namespace pattern
Namespaces help reduce the number of globals required by our programs at the same time also help avoid naming collisions or excessive name prefixing. 

JavaScript doesn't have namespaces built into the language syntax, but this is a feature that is quite easy to achieve.

Instead of polluting the global scope with a lot of functions, objects and other variables, you can create one (and ideally only one) global object for your application or library. Then you can add all the functionality to that object. 

Consider the following example:
```javascript 
// BEFORE: 5 globals
// Warning: antipattern

// constructors
function Parent() {}
function Child() {}

// a variable
let some_var = 1;

// some objects
let module1 = {};
module1.data = {a: 1, b: 2};
let module2 = {};
```

Applying the pattern:
```javascript
// AFTER: 1 global

// global object
let MYAPP = {};

// constructors
MYAPP.Parent = function () {};
MYAPP.Child = function () {};

// a variable
MYAPP.some_var = 1;

// an object container
MYAPP.modules = {};

// nested objects
MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = {a: 1, b: 2};
MYAPP.modules.module2 = {};
```

 #### Advantages

This pattern is highly recommended and a good way to namespace your code and __avoid naming collisions__ in your own code, and collisions __between your code and third-party__ code on the same page, such as libraries or widgets.

 #### Drawbacks

* A bit more to type: prefixing every variable and function
* Only one global instance means that any part of the code can modify the global instance, and the rest of the functionality gets the updated state
* Long nested names mean longer (slower) property resolution lookups

The _sandbox pattern_ discussed later addresses these drawbacks.

 #### General Purpose Namespace Function

As the complexity of a program grows and some parts of code get split into different files and included conditionally, it becomes unsafe to just assume that your code is the first to define a certain namespace or a property inside of it. 

Therefore, it's best to check first that it doesn't already exist

```javascript
if (typeof MYAPP === 'undefined') {
  let MYAPP = {};
}

// or shorter
let MYAPP = MYAPP || {};
```

Added checks can quickly result in a lot of repeating code. That's why it's handy to have a reusable function that takes care of the namespacing details. Let's call this function `namespace()` and use it like so:

```javascript
MYAPP.namespace('MYAPP.module.modules2');
```

An example nondestructive implementation (if a namespace exists, it won't be re-created):

```javascript
var MYAPP = MYAPP || {};

MYAPP.namespace = function (ns_string) {
  let parts = ns_string.split('.'),
  parent = MYAPP,
  i;

  // strip redundant leading global
  if (parts[0] === 'MYAPP') {
    parts = parts.slice(1);
  }

  for (i = 0; i < parts.length; i += 1) {
    // create a property if it doesn't exist
    if (typeof parent[parts[i]] === 'undefined') {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }
  return parent;
};
```
# OCP: Declaring Dependencies
JavaScript libraries are often modular and namespaced, which enables oyu to include only the modules oyu require.
It's a good idea to declare the modules your code relies on at the top of your function or module. The declaration involes creating only a local variable and pointing to the desired module

```javascript
let myFunction = function () {
  // dependencies
  let event = YAHOO.util.Event,
      dom = YAHOO.util.Dom;
  
  // use event and dom variables
  // for the rest of the function...
}
```

This is an extremly simple pattern, but at the same time it has numerous benefits:

* Explicit declaration of dependencies signals to the user of your code specific script files that they need to make sure are included at the page
* Upfront declaration at the top of the function makes it easy to find and resolve dependencies
* Working with a local variable is always faster than working with a global and even faster that working with nested properties of a global variable
* Smaller code after minification
# OCP: Private Properties and Methods
Javascript has no special syntax to denote private, protected or public properties and methods. All objects members are public.

* private properties inside constructors
* private properties in object literals
* private properties with prototypes

 ### Private members

You can implement them using a __closure__. Your constructor functions create a closure and any variables that are part of the closure scope are not exposed outside the constructor. However, these private variables are available to the public methods defined inside the constructor and exposed as part of the returned objects.

Let's see an example where `name` is a private member, not accessible outside the constructor:

```javascript
function Gadget() {
  // private member
  let name = 'iPod';
  // public function
  this.getName = function () {
    return name;
  };
}
let toy = new Gadget();

// 'name' is undefined, it's private
console.log(toy.name); // undefined 

// public method has access to 'name'
console.log(toy.getName()); // 'iPod'
```

As you can see, it's easy to achieve privacy in JavaScript. All you need to do is wrap the data you want to keep private in a function and make sure it's local to the function, which means not making it available ouside the function.

 ### Privileged members

It's just a name given to the public methods that have access to the private members.

 ### Privacy Failures

There are some edge cases when you're concerneda bout privacy:

* Some earlier versions of Firefox enable a second parameter to be passed to `eval()` that is a context object enabling you to sneak into the private scope of the function. These edge cases don't apply to widely used browsers today.

* When you're directly returning a private variable from a privilegd method and this variable happens to be an object or array, then outside code can modify the private variable because it's passed __by reference__.

 ### Object Litrals and Privacy

As you saw before, all you need is a function to wrap the private data. YOu can use the clousure created by an additional anonymous immediate function.

```javascript
let myobj;
(function () {
  // private members
  let name = "my, oh my";

  // implement the public part
  // note -- no 'var'
  myobj = {
    // privileged method
    getName: function () {
      return name;
    }
  };
}());

myobj.getName(); // 'my, oh my'
```

The same idea but with slightly different implementation:

```javascript
let myobj = (function() {
  // private members
  let name = "my, oh my";

  // implement the public part
  return {
    getName: function () {
      return name;
    }
  };
}());
```

This example is also the bare bones of what is known as "module pattern".

 ### Prototypes and Privacy

One drawback of the private members when used with constructors is that they are re-created every time the constructor is invoked to create a new object.

This is actually a problem with any members you add to `this` inside of constructor. To avoid the dupplication of effort and save memory, you can add common properties and methods to the `prototype` property of the constructor. This way common parts are shared among all the instances created with the same constructor. you can also share the hidden private members among the instances. 

To do so, you can use the combination of two patterns:

* private properties inside constructors
* private properties in object literals

Because the `prototype` property is just an object, it can be created with the object literals.

```javascript
function Gadget() {
  // private member
  let name = 'iPod';
  // public function
  this.getName = function () {
    return name;
  };
}

Gadget.prototype = (function () {
  // private member
  let browser = 'Mobile Webkit';
  // public prototype members
  return {
    getBrowser: function () {
      return browser;
    }
  };
}());

let toy = new Gadget();
console.log(toy.getName()); // privilegd 'own' method
console.log(toy.getBrowser()); // priileged prototype method
```
# OCP: Revelation Pattern
The revelation pattern is about __having private methods, which you also expose as public methods__. This could be useful when all the functionality in an object is critical for the workings of the object and you want to protect it as much as possible. But at the same time, you want to provide public access to some of this functionality because that could be useful too. 

When you expose methods publicly, you make them vulnerable, some of the users of your public API may modify it, even involuntarily. __In ES5, you have the option to freeze an object__.

```javascript
let myarray;

(function () {
  let astr = '[object Array]',
      toString = Object.prototype.toString;
  
  function isArray(a) {
    return toString.call(a) === astr;
  }

  function indexOf(haystack, needle) {
    var i = 0,
        max = haystack.length;
    for (; i < max; i += 1) {
      if (haystack[i] === needle) {
        return i;
      }
    }
    return -1;
  }

  myarray = {
    isArray: isArray,
    indexOf: indexOf,
    inArray: indexOf
  };
}());
```

Here you have two private variables and two private functions `isArray()` and `indexOf()`. Toward the end of the immediate function, the object `myarray` is populated with the functionality you decide is appropiate to make publicly available.

Now if something unexpected happens, for example, to public `indexOf()`, the private method is still safe and therefore `isArray()` will continue to work.

```javascript
myarray.indexOf = null;
myarray.inArray(['a','b','z'], 'z'); // 2
```
