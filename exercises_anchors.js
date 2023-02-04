const match = require('./match.js');

// Write a regex that matches the word The 
// when it occurs at the beginning of a line.

let answer = /^The\b/g;
match(['The lazy cat sleeps.', 'The number 623 is not a word.', 'Then, we went to the movies.', 'Ah. The bus has arrived.'], answer);

// Write a regex that matches the word cat when it occurs at the end of a line.

answer = /\bcat$/g;
match(['The lazy cat sleeps', 'The number 623 is not a cat', 'The Alaskan drives a snowcat'], answer);

// Write a regex that matches any three-letter word;
// a word is any string comprised entirely of letters.

answer = /\b[a-z][a-z][a-z]\b/gi;
match(['reds and blues', 'The lazy cat sleeps.', 'The number 623 is not a word. Or is it?'], answer);

// Write a regex that matches an entire line of text that consists of exactly 3 words as follows:
// The first word is A or The.
// There is a single space between the first and second words.
// The second word is any 4-letter word.
// There is a single space between the second and third words.
// The third word -- the last word -- is either dog or cat.

answer= /^(A|The)[ ][a-z][a-z][a-z][a-z][ ](dog|cat)$/gi;
match(['A grey cat', 'A blue caterpillar', 'The lazy dog', 'The white cat', 'A loud dog', '--A loud dog', 'Go away dog', 'The ugly rat', 'The lazy, loud dog'], answer);