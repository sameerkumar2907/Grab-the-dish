var express = require("express");
var bodyParser = require("body-parser")
var app = express();
// var request = require("request");
var axios = require("axios");
var cheerio = require("cheerio")
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var text="message"
var data ={
    name: "abc",
    age: 0
}
app.get("/", function(req, res){
    res.send(text);
});
app.post("/connect", function(req, res){
    var city = req.body.city
    var cuisine = req.body.cuisine
    // var content = "45fgh"
    axios.get("https://www.zomato.com/" + city + "/restaurants/" + cuisine + "?sort=best&category=1")
    .then(response=>{
                    let $ = cheerio.load(response.data)
                    const content = {
                        data:"",
                        url:""
                    }
                    content.data = $('.jumbo-tracker a:nth-child(2)').html();
                    content.url = $('.jumbo-tracker a').attr("href")
                    access(content)
                })
      .catch((error) => {
        console.log(error)
      })
      function access(content){
          res.send(content)
      }
});


app.listen(9000, function(err){ 
    if (err) console.log("Error in server setup"); 
    console.log("Server listening on Port", 9000); 
});