// Global object

//console.log(global);

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

// because we have not specified an object (example: object.setTimeout()), it assumes we are running this in the default global object 

// see below for some more stuff we can do in Node.js without having to do anything (i.e. global object)

console.log(__dirname); // this gets the absolute path of the current folder that this file is in
console.log(__filename); // this gets the absolute path of the current folder with the file name added on as well

// dirname is especially useful to get the current directory of the file as we are often working with different files 
// and we need to formulate the paths between them

// We don't need access to all the things available on the window object (see DOM tutorial/notes), as we are using Node.js for the backend only. 
