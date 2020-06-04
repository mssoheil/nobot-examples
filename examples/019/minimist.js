const minimist = require("minimist");
const readLineSync = require("readline-sync");

const args = process.argv.slice(2);
const parsedArgs = minimist(args);
console.log("DEBUG: parsedArgs", parsedArgs);
