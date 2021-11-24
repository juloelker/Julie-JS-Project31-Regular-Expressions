/*JS Regular Expressions
 To test, use regex101.com*/

let re = '';

// Literal Characters
re = /hello/;
re = /hello/i;

//
//
// Metacharacter symbols
re = /^h/i; //^: must start with (i also case insensitive)
re = /world$/i; //must end with, can be more than one character
re = /^h d$/i; //combined beginning and end
re = /h.llo/i; //match any ONE character
re = /h*llo/i; // match any character 0 or more times
re = /gre?a?y/i; // Optional character ? after, so either a or e will match
re = /judg?e?ment/i;
re =
  /little\?/i; /*Escape character before ? to read it as ? instead of as an re rule*/

//
//
// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be one of whatever is inside [], (better than ?a?e)
re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/i; // Match anything except a G or ^inside the []
re = /[A-Z]ray/; // Match any uppercase letter, range
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any  letter
re = /[0-9]ray/; // Match any digit, first digit can repeat, so '1001ray' would match

//
//
// Braces {} - Quantifiers
re = /hel{2}o/; // Must match the character before it {m} number of times
re = /hel{2,4}o/; // Must occur {range m,m} of times, e.g., 2, 3 or 4
re = /hel{2,}o/; // Must occur at least {m} times

//
//
// Paretheses () - Grouping
re = /^([0-9]x){3}/; //the first number with x must happen 3 times (can be more)

re = /([0-9]x){3}/; //the anyNumx can be anywhere in the string

re = /^([0-9]x){3}$/; //the anyNumx must be at the beginning and the expression must end with the 3rd repeat

//
//
//Shorthand Character Classes
re = /\w/; //the first word character - alphanumeric or an underscore _, same as /[A-Za-z0-9_]
re = /\w+/; //all word characters
re = /\W+/; //non-word characters, so won't match letter, number or _, same as /[^a-zA-Z0-9]/, + all non-word characters
re = /\d/; //the first digit, returns first digit
re = /\d+/; //any digits, 0 or more times, returns all digits
re = /\D/; //non-digits
re = /\D+/; //non-digits 0 or more times, returns all
re = /\s/; //returns the first whitespace character, spacebar space, tab, equivalent to [\r\n\t\f\v ]
re = /\s+/; //returns all whitespace characters, but may treat them as one item in the array
re = /\S/; //returns first non-whitespace character
re = /\S+/; //returns non-whitespace characters, but not all, treats the first one as one item in the array
re = /Hell\b/; //word boundary, returns only Hell, not Hello

//
//
//Assertions (conditionals)
re = /x(?=y)/; //Match x only if followed by y, returns only the x
re = /x(?!y)/; //Match x only if NOT followed by y, returns only the x

//
//
//
// String examples, literals and metacharacters
let str = 'Hello world'; //matches /hello/i
str = 'Clare _1world'; //matches /world$/i
str = 'h d'; //matches //matches /^h d$/i
str = 'Hallo world'; //matches /h.llo/i, also /h*llo/i
str = 'h;llo world'; //matches /h.llo/i, also /h*llo/i
str = 'h llo world'; //matches /h.llo/i, also /h*llo/i
str = 'hello anything else'; //matches /h.llo/i
str = 'heallo world'; //matches /h*llo/i, does NOT match /h.llo/i
str = 'hllo world'; //matches /h*llo/i, does NOT match /h.llo/i
str = 'grey'; //matches /gre?a?y/i
str = 'gray'; //matches /gre?a?y/i
str = 'judgment'; //matches /judg?e?ment/i
str = 'judgement'; //matches /judg?e?ment/i
str = 'Julie?'; //matches /Julie\?/i
str = 'little?'; //matches /little\?/i
str = 'Julie'; //does NOT match /Julie\?/i
str = 'helo world'; //does NOT match /h.llo/i, or /h*llo/i
str = 'little'; //does NOT match /little\?/
str = 'h  d'; //does NOT match /^h d$/i

//
//
//String examples, []
str = 'gray'; //matches /gr[ae]y/i
str = 'Fray'; //matches /[GF]ray/
str = 'Gray'; //matches /[GF]ray/
str = 'Xray'; //does NOT match /[GF]ray/
str = 'Xray'; //matches /[^GF]ray/
str = 'Xray'; //matches /[A-Z]ray/ uppercase only
str = 'xray'; //matches /[a-z]ray/ lowercase only
str = 'xray'; //matches /[A-Za-z]ray/ either upper or lower
str = '01ray'; //matches /[0-9][0-9]ray/
str = '0aray'; //does NOT match /[0-9][0-9]ray/
str = '1001ray'; //matches /[0-9]ray/

//
//
//String examples {} quantifiers
str = 'hello'; //matches /hel{2}o/
str = 'helllo'; //matches /hel{2,4}o/
str = 'hellllo'; //matches /hel{2,4}o/
str = 'helllllo'; //does NOT match /hel{2,4}o/
str = 'helllllo'; //matches /hel{2,}o/
str = 'helo'; //does NOT match /hel{2,}o/

//
//
//string examples () grouping
str = '3x4x3x'; // matches /^([0-9]x){3}/, anyNumberx must happen 3 times
// str = '3x3x3x';
str = '3x3x3x3'; //matches /^([0-9]x){3}/, matches because we must match the first group due to ^

str = '13x4x5x3333'; //matches /([0-9]x){3}/, matches because we must match the anyNumberx 3 times anywhere it occurs

str = '13x4x5x3333'; //does NOT match /^([0-9]x){3}/, because we must match the anyNumberx 3 times at the beginning, due to ^

str = '11x9xx5xxx'; //does NOT match /([0-9]x){3}/, because we don't have anyNumberx 3 times in a row, interrupted by an extra x

str = 'JT1x2x3x '; //does NOT match /([0-9]x){3}$/, no beginning requirement, but $ indicates it has an end requirement, and a blank space is a character

str = 'JT1x2x3x'; //matches /([0-9]x){3}$/

str = '1x2x3x'; // matches /^([0-9]x){3}$/, common expression, must match the beginning and the end of the string due to ^ and $

str = '1x1x1x 4x'; //does NOT match /^([0-9]x){3}$/, we didn't match the end because of the space

//
//
//String examples, shorthand character classes
str = '3x3x3x'; //matches /\w/, returns the first "word character", '3'
str = '3x3x3x'; //matches /\w+/, returns all the word characters, '3x3x3x'
str = '!'; //does NOT match /\w+/
str = '!!'; //matches the first /\W/
str = '!!'; //matches /\W+/, returns both !
str = '99'; //matches /\d/, returns 9
str = '99'; //matches /\d+/, returns 99
str = 'w99'; //matches /\D/, returns w
str = 'wx 99'; //matches /\D+/, returns wx space
str = 'a bc'; //matches /\s/, returns the space
str = 'a  b c'; //matches /\s+/, returns all whitespaces
str = 'abc'; //does NOT match /\s/, no whitespaces

str = 'a bc'; //matches /\S/, returns a
// str = 'a bc';
str = 'a  bc'; //matches /\S+/, returns a, not a  bc, the algorithm quit as soon as it matched the first non-space
str = 'Hello, welcome to Hell'; //with word boundaries, /Hell\b/; matches on the second Hell, not on Hello

//
//
// String examples, Assertions
str = 'xy'; // matches /x(?=y)/
str = 'x y'; //does NOT match /x(?=y)/
str = 'x'; //does NOT match /x(?=y)/
str = 'xy a bunch of junk'; //matches /x(?=y)/, returns only the x
str = 'xa'; //matches /x(?!y)/, returns only the x, no = needed

//
//
//
// Log the result
const result = re.exec(str);
console.log(result);

/* custom function to console log a 
test of my re*/
function reTest(re, str) {
  if (re.test(str)) {
    console.log(`String ${str} matches ${re}`);
  } else {
    console.log(`String ${str} does NOT match ${re}`);
  }
}

reTest(re, str);
