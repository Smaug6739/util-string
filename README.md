# Util string

This module regroup useful functions for string.

## Instalation

* Install the module : `npm install --save util-str`

## Usage

This module is very easy to use, you just need import it.

### Import

* `import 'util-str';`

### Require

* `require('util-str')`

Once imported, the functions are automatically available on string.

#### Examples

```js
'this is a string'.functionName()
```

## Functions

`isEmail()` : Return true if string is an email.  
Type: boolean;

`isEmpty()` : Return true if string is empty.  
Type: boolean;

`isLower()` : Return true if the string is lowercase.  
Type: boolean;

`isUpper()` : Return true if string is uppercase.  
Type: boolean;

`passwordForce()` : Return the force of password (strong/medium/weak).  
Type : string;

`hasSpecialCharacter()` : Return true if string have special character(s).  
Type : boolean;

`includesLink()` : Return true if string contains a link.  
Type : boolean;

`toCapitalise()` : Return the string with uppercase at the start of sentences.  
Type: string;

`camelCase()` : Return the string with a upperCase on the new words.  
Type : string;

`snakeCase` : Return the string with a `_` between words.  
Type : string;

`between(x:string, y:string)` : Return the string (or null) between param x and param y.  
Type : string;

`removeStr(str:string)` : Return the string with out parameter.  
Type : string;

`startBy(start:string)` : Return true if string start by parameter.  
Type : boolean;

`endBy()` Return true if string end by parameter.  
Type : boolean;

`reverse()` Return the string overthrown.
Type : string;

## Example

```js
require('util-str') // Import the module

console.log("Lorem@ipsum.com".isEmail());
// true

console.log("Lorem ipsum dolor".passwordForce())
// medium

console.log(`Lorem ipsum dolor`.hasSpecialCharacter());
// false

console.log(`http://lorem.com?1=ipsum&`.includesLink()); 
// true

console.log(`lorem . ipsum dolor .`.toCapitalise()); 
// Lorem. Ipsum dolor

console.log(`Lorem ipsum dolor`.camelCase());

console.log(`Lorem ipsum dolor`.snakeCase());
// Lorem_ipsum_dolor

console.log(`Lorem {ipsum} dolor`.between('{', '}'));
// ipsum

console.log("Lorem ipsum dolor".removeStr('ipsum'));
// Lorem dolor

console.log(`Lorem ipsum dolor`.startBy('Lo')); 
// true

console.log('Lorem ipsum dolor'.endBy('or')); 
// true

console.log(`Lorem ipsum dolor`.isEmpty());
// false

console.log(`Lorem ipsum dolor`.isLower());
// false

console.log('Lorem ipsum dolor'.isUpper());
// false

console.log('Lorem ipsum dolor'.reverse());
// rolod muspi meroL

```

## Contributions/Licence

This project has an MIT license. And you are welcome to contribute.

## Need help

If you have question or need help, open issue.
