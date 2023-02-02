const match = require('./match.js');
// Write a regex that matches uppercase or lowercase Ks or a lowercase s.
// Test it with these strings:

let answer = /[Kks]/g;
match(['Kitchen Kaboodle', 'Reds and blues', 'kitchen Servers'], answer);

// Write a regex that matches any of the strings
// cat, cot, cut, bat, bot, or but, regardless of case.

answer = /[cbCB][aouAOU]t/gi
match([`My cats, Butterscotch and Pudding, like to
sleep on my cot with me, but they cut my sleep
short with acrobatics when breakfast time rolls
around. I need a robotic cat feeder.`], answer);

// Base 20 digits include the decimal digits 0 through 9,
// and the letters A through J in upper or lowercase.
// Write a regex that matches base 20 digits.

answer = /[0-9A-J-a-j]/g
match(['0xDEADBEEF', '1234.5678', 'Jamaica', 'plow ahead'],answer);

// Write a regex that matches any letter except x or X. Test it with these strings:
answer = /[A-WYZa-wyz]/g;
match(['0x1234', 'Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count.', 'The quick brown fox jumps over the lazy dog', 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'], answer);

// Write a regex that matches any character that is not a letter.
answer = /[^A-Za-z]/g;
match(['0x1234abcd', '1,000,000,000s and 1,000,000,000s.', 'THE quick BROWN fox JUMPS over THE lazy DOG!'], answer);


// Are /(ABC|abc)/ and /[Aa][Bb][Cc]/ equivalent regex?
// If not, how do they differ?
// Can you provide an example of a string that would match one of these regex,
// but not the other?

// They are differnt because the first will match either all caps, or all lowercase
// The second will match any combination of caps and lowercase abc combinatinos

// answer: Example of match for second but not first: aBc


// Are /abc/i and /[Aa][Bb][Cc]/ equivalent regex?
// If not, how do they differ?
// Can you provide an example of a string that would match one of these regex,
// but not the other?

// answer: They are equivalent

// Write a regex that matches a string that looks like a simple negated character class range, e.g., '[^a-z]'

answer = /\[\^[A-Za-z0-9]-[A-Za-z0-9]\]/g;

match([`The regex /[^a-z]/i matches any character that is
not a letter. Similarly, /[^0-9]/ matches any
non-digit while /[^A-Z]/ matches any character
that is not an uppercase letter. Beware: /[^+-<]/
is at best obscure, and may even be wrong.`], answer);