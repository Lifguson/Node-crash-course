const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes')

// express app:
const app = express();

// connect to mongoDB
const dbURI = 'mongodb+srv://Lifguson:gebN5aLVAuLpKvPZ@clustertutorial.pfotj9w.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) // this is an asynchronous task, it is somewhat like a promise so we can use .then
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');


// listen for requests:
// app.listen(3000); // this also returns an instant of the server; you can store it as a constant if you want to use it in future for other things like web sockets

// middleware & static files (i.e., css and images we are going to make public)

app.use(express.static('public')); // any files in the 'public' folder will be public to the browser
app.use(express.urlencoded({ extended: true} )); // this middleware is essential to accepting form data
app.use(morgan('dev'));

// mongoose and mongo sandbox routes:

// app.get('/add-blog',(req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()     // this is an asynchronous task
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// })

// app.get('/single-blog', (req, res) => {
//     Blog.findById('62fe6c35fa914595ca495668')
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// })

// routes:
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes); // by scoping '/blogs' here, it means we don't need to scope it out in the handlers in the blogRoutes file


// 404 page:
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});

// the .use function is used to create middleware and fire middleware functions in express
// this must go at the bottom of the code because the .use is not scoped to a particular url, so it fires for every single request. If it sends a response to the browser then it doesn't carry on with the rest of the code, meaning it will send a 404 error if the person tries to go to a page which is below .use in the code. For example, if the .use comes before the /about page, it will return 404 error and then stop the code, meaning you won't be able to access the about page.

