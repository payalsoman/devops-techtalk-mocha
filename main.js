var redis = require('redis')
var multer  = require('multer')
var express = require('express')
var fs      = require('fs')
var app = express()
// REDIS
var client = redis.createClient(6379, '127.0.0.1', {})
var urlList = "recentURLs";
var imageQueue = "imageQueue";

///////////// WEB ROUTES

// Add hook to make it easier to get all visited URLS.
app.use(function(req, res, next) 
{
	console.log(req.method, req.url);
	client.lpush(urlList, req.url);
	client.ltrim(urlList, 0, 4);
	// ... INSERT HERE.
	//client.lpush

	next(); // Passing the request to the next handler in the stack.
});

app.get('/', function(req, res) {
  res.send('hello world');
})

app.get('/set', function(req, res) {
	var key = "key";
	var value = "NCSU";
	client.set("key", value);
	//client.expire("key", 10000);
	res.send("value is set");
})

app.get('/get', function(req, res) {
	client.get("key", function(err,value){ 
		if(!err) {
			console.log(value);
			var redisvalue = value;	
			res.send(redisvalue);
		}
		else{
			res.send("no key found");
		}	
	});
	//res.send(redisvalue);
})

app.get('/recent', function(req, res) {
	
	client.lrange(urlList, 0, 4, function(err,value){ 
		if(!err) {
			console.log(value);
			var urlListValue = value;
			var resText = "Recent URLs accessed:<br>";
			for (var i = 0; i<urlListValue.length; i++) {
				resText = resText + urlListValue[i] + "<br>";
			}
			res.send(resText);
		}
	});
	
})
app.post('/upload',[ multer({ dest: './uploads/'}), function(req, res){
   console.log(req.body) // form fields
   console.log(req.files) // form files

   if( req.files.image )
   {
	   fs.readFile( req.files.image.path, function (err, data) {
	  		if (err) throw err;
	  		var img = new Buffer(data).toString('base64');
	  		//console.log(img);
	  		console.log("Image uploaded successfully");
	  		client.lpush(imageQueue, img);
	  		client.ltrim(imageQueue, 0, 0);
		});
	}

   res.status(204).end()
}]);

app.get('/meow', function(req, res) {
	{			
		client.lrange(imageQueue, 0, 0, function(err, items){ 
			if(!err) {
				res.writeHead(200, {'content-type':'text/html'});
				items.forEach(function (imagedata)
				{
		   			res.write("<h1>\n<img src='data:my_pic.jpg;base64,"+imagedata+"'/>");
				});
			   	res.end();
			}
		});
	}
})

//HTTP SERVER
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})

