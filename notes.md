# Regex  Notes #

## General ##
`(|)` - Can use parenthesis in combination with pipe to specify multiple different patterns to match
  - `b(a|o|u)t` - Can be concatenated like any other pattern
- `[]` Can use brackets to specify a character class that matches indivdual characters in a string 
  - `[a-zA-Z][0-9]` - Can concatenate character classes like another other pattern (e.g first character alphabetic, second is digit)
  - `b[aou]t` - Another concatenation example

### General Important Note ###
- Whenever using any type of matching, matches cannot overlap
- This means characters matched in one match cannot be used in another

Ex)
```javascript
let regex = /\s...\s/gi;

let str = 'Me and pat went to the stu'
//           ^^^^^           ^^^^^
// pat does not match as we used one of its matching characters in another match
```

## Character class shortcuts ##

- `^`- Negation character, will match everything that is not contained in character class
- `.` - Will match all characters except newline. **Is NOT actually used inside a character class**
  - Inside of a character class, a `.` is treated as a literal, and won't actually work
- `-` - Can use a dash to specify a UTF-16 range such as `[a-zA-Z0-9]`

**Note:**
- All of the following can be used inside or outside of a character class

### Whitespace classes ###
- `\s` - match a any type of white space character --> equivalent: `[ \t\v\r\n\f]`
- `\S` - match non-white space characters --> equivalent: `[^ \t\v\r\n\f]`
  - `\t` - match a tab
  - `\n` - line feed / new line character
  - `\v` - veritcal tab
  - `\r` - carraige return
  - `\f` - form feed

**Note:**
- These will match literal white space characters in a string as well, such as `"Four\tscore"`

### Digits and Hex ###
- `\d` - Any decimal digit (0-9) --> equivalent: `[0-9]`
- `\D` - Any character but a decimal digit --> equivalent: `[^0-9]`
- `\h` - Any hexidecimal digit --> equivalent: `[0-9A-Fa-f]`
  - **NOTE: THIS DOESN'T WORK IN JS**
- `\H` - Any non-hexidecimal digit --> equivalent: `[^0-9A-Fa-f]`
  - **NOTE: THIS DOESN'T WORK IN JS**

### Word characters ###
- `\w` - Any alphanumeric character and underscore --> equivalent: `[0-9A-Za-z_]`
- `\W` - Non - alphanumeric character or underscore --> equivalent: `[^0-9A-Za-z_]`

**Note:**
- There is no shortcut for normal alphabetic characters

## Boundaries ##
- `^` - Outside of a character class, denotes the start of a string
- `$` - Denotes the end of the string
- `\b` - word boundaries (words are matched by `\w`)
- `\B\` - non-word boundaries (non-words are matched by `\W`)

```javascript
let regex = /^cat/gi;

let str = 'catastrophe'
//         ^^^------->
let str = 'wildcat'
//        <---_____  Doesn't match as the string doesnt start with cat
```
```javascript
let regex = /cat$/gi;
let str = 'catastrophe'
//         ___-------> Does'nt match since it doesn't end with cat
let str = 'wildcat'
//        <----^^^ 
```
```javascript
let regex = /\bcat\b/gi;

let str = 'I feed my cat all the time. I love my cat, he is my favorite cat_.'
//                   ^^^                         ^^^
// Matches each time except last. Only matches cat with non word characters on each side
```
```javascript
let regex = /\Bcat\B/gi;

let str = 'This is a _cat. Another _cat_'
//                                  ^^^
// First cat only has one word charcter boundary, needs one on either side
```

## Quantifiers ##
A way to specify how many times a match should occur
- `*` - Match 0 or more occurences of the pattern to my left
  - 0 or more essentially means the pattern may be omitted completely
  - Because we include 0 occurences, will need to specify one more pattern than the minimum
  - Ex --> 3 digits in a row --> `/\d\d\d\d*/`
- `+` - Match 1 or more occurences of the pattern to my left
  - Pattern must be present at least one time
  - Ex --> 3 digits in a row --> `/\d\d\d+/`
- `?` - Match a pattern to the left 0 or 1 times
 - This specifies an optional pattern to match  
- `p{m}` - Allows you to specify `m` occurences of pattern `p`
  - `/\d{3}/` --> equivlanet `/\d\d\d/`
- `p{m,}` - Allows you to specify `m` occurences or more of pattern `p`
- `p{m, n}` - Allows you to specify `m` matches or more, but not more than `n`

More ex)
```javascript
let regex0  = /1(234)*5/g;
let string = '15'; // match
let string2 = '12345678'; // match
let string3 = '1234235'; // no match (ONLY allows 0 or more occurances of 234 between 1 and 5)
```
```javascript
let regex0  = /1(234)+5/g;
let string = '15'; // No match (ONLY allows 1 or more occurences of 234 between 1 and 5)
let string2 = '12342345'; // match
let string3 = '1234235'; // No match (ONLY allows 1 or more occurences of 234 between 1 and 5)
```
```javascript
let regex0 = /1(234)?5/g;
let string = '15'; // Match
let string1 = '12345'; // match
let string 2 = '12342345' // no match (occured more than once)
```

Say I wanted a match and number that started with 1, ended with 5, and had the sequence 234 atleast once, but also allows any other sequences inside as well
Regex --> `/1(.+234).+5/`

```javascript

```