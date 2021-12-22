const express = require('express');
const authorsRouter = express.Router();
function router(nav){
    var authors = [
        {
            book : 'Tom and Jerry',
            author: 'joseph barbera',
            genre: 'cartoon',
            img: "tom.jpeg"
    
        },
        {
            book : 'Harry Potter',
            author: 'JK Rowling',
            genre: 'Fantasy',
            img: "harry.jpeg"
    
        },
        {
            book : 'Pathummayude aadu',
            author: 'Basheer',
            genre: 'drama',
            img: "pathu.jpeg"
    
        }
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Library',authors
    
        });
    });
    
    authorsRouter.get('/:id', function(req,res){
        const id = req.params.id
        res.render('author',{
            nav,
            title:'Library',
            author: authors[id]
        });
    });
    
    return authorsRouter;
}

module.exports = router;