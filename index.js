var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');
var bodyparser = require('body-parser');

var app = express();

//port no
const port = 3000;

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/cv');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb on @ 27017');
});

//on error
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log("Error in database connection:"+err);
    }

    
});

//adding middleware
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

app.use('/api', route);

//testing server
app.get('/',(req,res)=>{
   
    res.send('foobar');
});

app.listen(port,()=>{
    console.log("Server started at port:" +port);
});