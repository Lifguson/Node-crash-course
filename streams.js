const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });   // this encodes the chunks into a readable format, similar to .toString
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', (chunk) => {
    console.log('---- NEW CHUNK ----');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);               
});

// .on is a data event listener -- every time we get a new chunk of data, we fire the callback function and get access to the chunk of data

// we can use pipes to write what we have above more succinctly 
// when we use a pipe it must be from a readable stream to a writeable one

// piping:
readStream.pipe(writeStream);

// there is also a duplex stream which means we can read and write through it -- more advanced, beyond this lesson. 