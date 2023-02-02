const match = require('./match.js');

// Write a regex that matches any sequence of three characters
// delimited by whitespace characters (the regex should match
// both the delimiting whitespace and the sequence of 3 characters)

let answer = /\s...\s/g;
match(['reds and blues', 'the lazy cat sleeps'], answer);

// Test the pattern /\s...\s/ from the previous exercise against
// this text (be sure to delete the previous text first):

answer = /\s...\s/g;
match(['Doc in a big red box.', 'Hup! 2 3 4'], answer);

// Doc doesnt have leading white space
// big matches
// Red doesn't match because the regex engine eats up the whitespace as part of the 'big' match
// box doesn't have trailing white space
// '2 3' matches because it is three characters long as has white space on both sides

// Match any four digit long hexidecimal number that is delimitted by white space

answer = /\s[\dA-Fa-f][\dA-Fa-f][\dA-Fa-f][\dA-Fa-f]\s/g;
match(['Hello 4567 bye CDEF - cdef', '0x1234 0x5678 0xABCD', '1F8A done'], answer);


// Write a regex that matches any sequence of three letters.

answer = /[a-z][a-z][a-z]/gi;
match(['The red d0g chases the b1ack cat.', 'a_b c_d'], answer);