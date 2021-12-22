const express = require('express');
const booksRouter = express.Router();
const app = express();

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');
app.use('/books',booksRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],title:'Library'

    });
});

var books = [
    {
        title: 'Tom and Jerry',
        author: 'joseph barbera',
        genre: 'cartoon',
        img: "tom.jpeg"

    },
    {
        title: 'Harry Potter',
        author: 'JK Rowling',
        genre: 'Fantasy',
        img: "harry.jpeg"

    },
    {
        title: 'Pathummayude aadu',
        author: 'joseph barbera',
        genre: 'drama',
        img: "pathu.jpeg"

    }
]

booksRouter.get('/',function(req,res){
    res.render("books",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],title:'Library',books

    });
});

booksRouter.get('/:id', function(req,res){
    const id = req.params.id
    res.render('book',{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],title:'Library',
        book: books[id]
    });
});
app.listen(5000);
  