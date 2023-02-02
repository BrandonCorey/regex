# Regex  Notes #

## General ##
`(|)` - Can use parenthesis in combination with pipe to specify multiple different patterns to match
  - `b(a|o|u)t` - Can be concatenated like any other pattern
- `[]` Can use brackets to specify a character class that matches indivdual characters in a string 
  - `[a-zA-Z][0-9]` - Can concatenate character classes like another other pattern (e.g first character alphabetic, second is digit)
  - `b[aou]t` - Another concatenation example

## character class shortcuts ##

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
- `\H` - Any non-hexidecimal digit --> equivalent: `[^0-9A-Fa-f]`

### Word characters ###
- `\w` - Any alphanumeric character and underscore --> equivalent: `[0-9A-Za-z_]`
- `\W` - Non - alphanumeric character or underscore --> equivalent: `[^0-9A-Za-z_]`

**Note:**
- There is no shortcut for normal alphabetic characters
