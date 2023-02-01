// Write a regex that matches an uppercase K. Test it with these strings:
const match = require('./match.js');

let answer = /K/g;
match(['Kx', 'BlacK', 'kelly'], answer);

// Write a regex that matches an uppercase or lowercase H. Test it with these strings:

answer = /h/i;
match(['Henry', 'perch', 'golf'], answer);

// Write a regex that matches the string dragon. Test it with these strings:

answer = /dragon/g;
match(['snapdragon', 'bearded dragon', 'dragoon'], answer);

// Write a regex that matches any of the following fruits:
// banana, orange, apple, strawberry.
// The fruits may appear in other words.
// Test it with these strings:

answer = /(banana|orange|apple|strawberry)/g;
match(['banana', 'orange', 'pineapples', 'strawberry', 'raspberry', 'grappler'], answer);

answer = /(,|\s)/g;
match(['This line has spaces', 'This,line,has,commas,', 'No-spaces-no-commas'], answer);

// Write a regex that matches blueberry or blackberry,
// but write berry precisely once. Test it with these strings:

answer = /(black|blue)berry/g;
match(['blueberry', 'blackberry', 'black berry', 'strawberry'], answer);