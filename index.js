/* Some programming languages (like Python) include a "title" method to return a string with Every Word Capitalized (e.g. 'title case'.title() returns 'Title Case').  

JavaScript has no .title method, but that won't stop us!  Use the string methods you know to print 'Title Case' from 'title case'. */

let notTitle = 'title case';
let cap0 = notTitle.slice(0,1).toUpperCase();
let rest0 = notTitle.slice(1,6);
let cap1 = notTitle.slice(6,7).toUpperCase();
let rest1 = notTitle.slice(7,10);
console.log(`${cap0}${rest0}${cap1}${rest1}`);