// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


//my timestamp api endpoint
app.get('/api/', function(req, res) {
  var utcTime = new Date().toUTCString();
  var unixTime = Date.parse(utcTime);
  res.json( {"unix": unixTime, "utc": utcTime}); 
});

app.get('/api/:time', function(req, res) {
  var dateTime = new Date(req.params.time);
  var utcTime = new Date(parseInt(req.params.time));
 //check whether input is time
  if (dateTime.getTime() > 0) {
    var utcTime = dateTime.toUTCString();
    unixTime = Date.parse(dateTime.toString());
    res.json( {"unix": unixTime, "utc": utcTime}); 
  } else if (utcTime.getTime() > 0) {
    utcTime = utcTime.toUTCString();
    unixTime = Date.parse(utcTime.toString());
    res.json( {"unix": unixTime, "utc": utcTime});
  }  
  
  res.json({"error": unixTime});  
    
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
