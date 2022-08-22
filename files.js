const fs = require('fs');

// reading files -- this is asynchronous:
fs.readFile('./docs/blog1.txt', (err, data) => {     // fs.readFile takes two arguments
    if (err) {
        console.log(err);
    }
    console.log(data); // this returns a Buffer ; if we want to return the string in the text do: console.log(data.toString());
})



// writing files
fs.writeFile('./docs/blog1.txt', 'hello world', () => {              // fs.writeFile takes three arguments  // 'hello world' will replace whatever text is in the file  // if the file doesn't exist, it will create the file
    console.log('file was written');
})      



// directories -- this is asynchronous 
if (!fs.existsSync('./assets')) {               // if such a folder doesn't exist already, it will create that folder; but if such a folder exists already, it will run the second half of the code and delete the existing folder
    fs.mkdir('./assets', (err) => {             // this will create an 'assets' folder
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {                                        
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    })
}



// deleting files -- fs.unlink()
if (fs.existsSync('./docs/deleteme.txt')) {                 
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}


// if we are using really large files, it is better to use streams and buffers