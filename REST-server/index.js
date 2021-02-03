const express = require('express');
const app = express();

const books = require('./controllers/data');
let router = express.Router();
// this example uses callback hell way of doing things, this should be async/await with promsify
// instructor has some odd choices for patterns
router.get('/', function(req, res, next){
    //res.status(200).send(books);

    books.get( (data) => {
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "All books",
            "data": data
        }, function (err){
            next(err);
        })
    })
    /*
    const data = {
        status: 200,
        statusText: "OK",
        message: "All Books",
        data : books.get()
    }
    */

    //res.status(200).json(data);

});

app.use('/api/', router);

const server = app.listen(5000, ()=> {
    console.log('Node server is running on port 5000');
});