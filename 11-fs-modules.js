const { readFileSync, writeFileSync } = require('fs');
// const fs = require('fs'); //also can 

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// if file not there (result-sync) it will create one 
// flag will append the text again
writeFileSync('./content/result-sync.txt', `Here is the result: ${first} , ${second}`, {flag:'a'})

console.log('done with this task');
console.log('starting the next one');