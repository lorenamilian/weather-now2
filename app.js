const express = require('express')

const bodyParser = require("body-parser")

const app = express()
 
//setting view engine
app.set('view engine', 'ejs')

//middleware
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));

//ROUTES
 
//get
app.get('/', function (req, res) {
  res.render('home.ejs');
})

app.post('/', function(req, res){
  console.log(req.body.city)
});
 
app.listen(3000, function(){
  console.log("my server is running better")
})