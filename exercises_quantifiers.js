const match = require('./match.js');

// Write a regex that matches any word that begins with b and ends with an e,
// and has any number of letters in-between.
// You may limit your regex to lowercase letters.

let answer = /\bb[a-z]*e\b/g;

match(['To be or not to be', 'Be a busy bee', 'I brake for animals.'], answer);

// Write a regex that matches any line of text that ends with a ?.
answer = /^.*\?$/g;

match(["What's up, doc?", 'Say what? No way.', '?', 'Who? What? Where? When? How?'], answer);

// Write a regex that matches any line of text that ends with a ?,
// but does not match a line that consists entirely of a single ?.

answer = /^.+\?$/g; // Clever answer, when we start with any character match, it eats '?' so its impossible to end with '?' if its only one character long
match(["What's up, doc?", 'Say what? No way.', '?', 'Who? What? Where? When? How?'], answer);

// Write a regex that matches any line of text that contains nothing but a URL.
// For this exercise, a URL begins with http:// or https://,
// and continues until it detects a whitespace character or end of line.

answer = /^https?:\/\/\S*$/g;

let arr = [
  'http://launchschool.com/', 
  'https://mail.google.com/mail/u/0/#inbox', 
  'htpps://example.com', 'Go to http://launchschool.com/', 
  'https://user.example.com/test.cgi?a=p&c=0&t=0&g=0 hello',
  '    http://launchschool.com/'];

  match(arr, answer);

  // Modify your regex from the previous exercise so the URL can have optional leading or trailing whitespace,
  answer = /^\s*https?:\/\/\S*\s*$/g;
  match(arr, answer);

 // Modify your regex from the previous exercise so the URL can appear anywhere on each line,
//  so long as it begins at a word boundary.

answer = /\bhttps?:\/\/\S*/g;
match(arr, answer);

// Write a regex that matches any word that contains at least three occurrences of the letter i.
answer = /\b([a-z]*i){3,}[a-z]*\b/gi // Each [a-z]*i matches a sequence of 0 or more letters followed by the letter i
match(['Mississippi', 'ziti 0minimize7', 'inviting illegal iridium'], answer)

// Write a regex that matches the last word in each line of text.
answer = /\b\S*$/g;
match(["What's up, doc?", "What's up, doc?", "Thufferin' thuccotath!", "Oh my darling, Clementine!", "Camptown ladies sing this song, doo dah."], answer);

// Write a regex that matches lines of text that contain at least 3, but no more than 6, consecutive comma separated numbers.
answer = /^,(\d+,){3,6}$/g

// Write a regex that matches lines of text that contain at least 3, but no more than 6, consecutive comma separated numbers.
answer = /^(\d+,){3,6}\d+/g;


// Write a regex that matches lines of text that contain either 3 comma separated numbers or 6 or more comma separated numbers. 
answer = /^((\d+,){2}|(\d+,){5,})\d+$/g;