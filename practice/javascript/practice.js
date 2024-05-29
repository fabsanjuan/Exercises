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
// object literals support many shorthand syntaxes that enhances its functionality (prototype construction, defining methods, making super calls, etc.)
// a regExpression literal is a pattern enclosed by slashes / pattern / .
// String literal is zero or more chars enclosed in single or double quotes.
// Template literals are chars enclosed by the back tick. This allows for string interpolation.
// Tagged templates are for compacting a function call with template literals - learn more about this.





// Converting from strings to numbers.
let identityX = "121";
let identityY = '11';
let numberX = parseInt(identityX);
let numberY = parseFloat(identityY);