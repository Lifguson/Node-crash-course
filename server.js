// // CREATING A SERVER:
// const http = require('http');
// const fs = require('fs');
// const _ = require('lodash');

// const server = http.createServer((req, res) => {        // you can store the server in a constant in case you want to use it in the future for something else - e.g. web sockets.
    
//     // lodash
//     const num = _.random(0, 20);
//     console.log(num);

//     const greet = _.once(() => {
//         console.log('hello');
//     });

//     greet();
//     greet();

//     // set header content type
//     res.setHeader('Content-Type', 'text/html');

//     let path = './views/';
//     switch(req.url) {    // using this switch statement to figure out what url the user has visited
//         case '/':
//             path += 'index.html';
//             res.statusCode = 200;
//             break;
//         case '/about':
//             path += 'about.html';
//             res.statusCode = 200;
//             break;
//         case '/about-us':
//             path += 'about.html';
//             res.statusCode = 301; // 301 means the source has been moved, therefore we redirect them to the new url
//             res.setHeader('Location', '/about');
//             res.end();
//             break;
//         default: 
//             path += '404.html';
//             res.statusCode = 404;
//             break;
//     }



//     // send an html file
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end();
//         } else {              
//             res.write(data);
//             res.end(); // if we are only sending one thing into res.write(), we can just send it directly into the res.end() method instead; 'res.end(data);'
//         } 
//     })
 
// }); 

// server.listen(3000, 'localhost', () => {        // three arguments: port number and host name, plus a function which fires when we start listening.
//     console.log('listening for requests on port 3000')
// }); 




