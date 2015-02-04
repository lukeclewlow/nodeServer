var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser')
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.render('index');
});

app.get('/greetings', function(request, response){
  response.render('greeting', { name: "Spike" });
});

app.post('/', function(request, response){
	var name = request.param("name"); 
	console.log(name);
	response.send
	response.sendfile('index.html');
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;