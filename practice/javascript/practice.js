// Js mdn notes and practice.
/* 
*/
// Js is case-sensitive.
// Instructions are called statements and they are separated by semicolons.
// Js source text is read from left to right and converted to sequence of tokens, control chars, line terminators, comments, whitespace.
// Comments cannot be nested and must be escaped using backslash for nesting.
// variables are symbolic names for values. The names are called identifiers.
// in statements, the declaration is the identifier part for referenceerrors and initializers are the second part for assigning values (undefined).
// only const declarations require initialization.
// there are 4 different types of scopes: global, module, function, block
// variable hoisting lifts all var declarations with default initialization to the top (not value assignment).
// function declarations are hoisted entirely with assignments - you can call function anywhere in its scope.
// global variables are properties of the global object. In web pages, the global object is the window.
// const creates read only assignments and cannot be redeclared. It doesn't prevent mutations.

// Data structures and types.
// There are eight data types in js.
// 7 primitive types: boolean (true false), null, undefined, Number, BigInt, String, Symbol
// 8th Object
// dynamically typed means no specifying data types, auto conversion during execution and re-assignment.
// for numbers and strings the + operator (only) converts all Numbers to String automatically. Reverse is true for the other math operators (-, *)
// literals represent values - fixed values not variables.
// an array literal is a list of expressions representing elements of the array. It create a new array object when the literal is evaluated.
// You can place two commas in a row and create an empty slot within an array. ONLY the very last comma (trailing) is ignored. IMPORTANT to understand commas in js.
// Boolean literal has 2 values true and false. 
// Numeric literals include integers in different bases and floating-point base-10.
// Integer literals are written in decimal (no leading 0), hexadecimal (0x), octal (leading 0), binary (0b), BigInt (trailing n suffix)
// floating point literals have 4 components (digits + decimal + fraction + exponent If any).
// An object literal is zero or more pairs of property names and their associated values.
// object properties can be accessed using the dot (.) notation or bracket [] notation.
TODO// object literals support many shorthand syntaxes that enhances its functionality (prototype construction, defining methods, making super calls, etc.)
// a regExpression literal is a pattern enclosed by slashes / pattern / .
// String literal is zero or more chars enclosed in single or double quotes.
// Template literals are chars enclosed by the back tick. This allows for string interpolation.
TODO// Tagged templates are for compacting a function call with template literals - learn more about this.

// Control flow in js.
// There is a compact set of control flow statements in js (if, for, while) these are used in conjunction with block statements {}.
// block statements are used to group statements together.
// js supports 2 types of conditional statements if...else and switch.
// if...else statements support a boolean condition that returns either true or false. Only the first condition to evaluate as true will be executed.
// It is not good practice to have an assignment as a condition - this is possible if using 'while' statements.
// Know and learn the falsey values in js (false, undefined, null, 0, NaN, empty string).
// Switch statements evaluate an expression and try to match the corresponding case label and transfer control to that clause if non is found the default label is used. 
// Optional break statements within switch will exit our of switch block - otherwise the other cases are also evaluated.
// You can see exceptions using the 'throw' statement and handle them using the try...catch statements.
// The throw statement will throw any exception or statement in js. However, it is best practice to use the exception types for this purpose.
// You want the try block to succeed but if not transfer control over to the catch block. The finally block is 'last attempt'
// js will create an identifier for the exception during catch block onlye and deleted afterwards. When ts error use console.error() instead of console.log()
// the finally blcok will execute regardless of an exception or not - it is a graceful way to fail your program.
// Note, if the finally blcok has a return statement it will always return this value regardless of other statements.
// You can also nest try...catch...finally blocks.
// Error objects have a name and message property that will provide more information about the error.


// Loops in js.
// The different loop mechanisms offer different ways to start and stop the iterations. Some situation favor a specific type of loop.
// The for loop repeats until a specified condition is false. for (initialization; condition; afterthought) /n statement.
// the do...while loop repeats until false. do /n statement /n while (condition);
// A while statement executes until condition is false. while (condition) /n statement.
// Infinite loops happen when your condition doesn't ever evaluate to false - bug.
// A label provides a statement with an identifier to refer to it elsewhere in program. label: /n statement
// break is used for: terminating a loop, switch, or used with a label statement
// continue is used to restart a while, do-while, for or label statement. It starts the next iteration of the innermost OR labeled loop.
// for...in iterates a specified variable over all enumerable props of an object. for (var in object) /n statement
// for loop is better for arrays. for...in iterates over user-defined props in addition to array elements.
// for...of creates a loop iterating over iterable objects. It works only on the values of each prop.
// for...in and for...of loops can be used in conjunction with destructuring.


// Converting from strings to numbers.
let identityX = "121";
let identityY = '11';
let numberX = parseInt(identityX);
let numberY = parseFloat(identityY);