var express = require("express");
var parse = require("./csv-parser.js");

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs")

app.get('/api/offense', function(req, res) {

  var callback = function(result) {

    res.send(result);
  }


  parse(callback);

});

app.get('/total-offense-html', function(req, res) {

  var callback = function(result) {
    res.render('total-offense', {
      content: result
    });
  }

  parse(callback);
});

var port = process.env.PORT || 3002;

app.listen(port, function(){
  console.log("AND WE'RE LIVE")
});
