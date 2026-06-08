# Function-declaration-using-JS

Function Declarations

In JavaScript, there are many ways to create a function. One way to create a function is by using a function declaration. Just like how a variable declaration binds a value to a variable name, a function declaration binds a function to a name, or an identifier. Take a look at the anatomy of a function declaration below:

An annotated JavaScript code snippet defining a function named greetWorld that logs 'Hello, World!' to the console. The keyword function is highlighted in blue and labeled 'FUNCTION KEYWORD', the identifier greetWorld() is highlighted in purple and labeled 'IDENTIFIER', and the function body console.log('Hello, World!'); is highlighted in yellow. A key at the bottom indicates that yellow highlights represent the function body.
A function declaration consists of:

The function keyword
The name of the function, or its identifier, followed by parentheses
A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }
A function declaration is a function that is bound to an identifier, or name. In the next exercise, we’ll go over how to run the code inside the function body.

We should also be aware of the hoisting feature in JavaScript, which allows access to function declarations before they’re defined.

Take a look at an example of hoisting:

greetWorld(); // Output: Hello, World!

function greetWorld() {
  console.log('Hello, World!');
}

Copy to Clipboard

Notice how hoisting allowed greetWorld() to be called before the greetWorld() function was defined! Since hoisting isn’t considered good practice, we simply want to point out this feature.
