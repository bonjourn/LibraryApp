const express = require('express');
const app = express();
const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },

    {
        link:'/admin',name:'Add Book'
    }];

const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorRouter = require('./src/routes/authorRoutes')(nav)
const adminRouter = require('./src/routes/adminRoutes')(nav)


app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/admin',adminRouter);


app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

let port = process.env.PORT || 5000;
app.listen(port);
  