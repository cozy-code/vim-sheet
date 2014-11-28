var express=require('express');
var app=express();

var http=require('http');
var server=http.createServer(app);

app.set('views', __dirname + '/views');
app.set('view engine','ejs');

app.use(express.static(__dirname + '/'));


server.listen(3000);
console.log(server.address());

