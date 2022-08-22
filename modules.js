// to import the people file into this modules file, we can do it using a 'require' statement:

const people = require('./people');
const xyz = require('./people'); // now if we run this modules file, it will also run the 'people' file, so we will see the array that is in the people file 

// console.log(people); will return an error - not defined. just because we imported the file, it doesn't automatically give us access to the things in the file.
// so if we want to access people inside that file, we have to manually export it. 

// console.log(xyz); will return an empty object, unless we manually tell this file to export some kind of data or properties
// once we have done 'module.export' in the people file, then console.log(xyz) will return something
// e.g. if we have 'module.export = people;' in the people file, then when we console.log(xyz) it will return the people array

// the above is to export a single thing, but what if we want to export multiple things? see 'people' file

// we can access both people and ages by doing:
console.log(xyz: people, xyz: ages);

// a nice way to import multiple different things from a different file is to use DESTRUCTURING:
const { people } = require('./people');
console.log(people);
// OR:
const { people, ages } = require('./people');
console.log(people, ages);


// Node.js also comes with some core modules built into which we can use for added functionality:
const os = require('os');

console.log(os); // this has a bunch of info about the current OS this is running on; it lists properties, e.g. platform -- console.log(os.platform(), os.homedir());

// one of Node.js' core modules is 'file' (The File System) which reads, creates and deletes files on our computer 
// the ability to interact with the file system on a computer, using JS, can only be done with Node.js
// see FILES.JS file






