var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req,res,next){
		console.log('privatr rout hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	} 

};

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req,res) {
	res.send('about us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT,function() {
	console.log('express works ON PORT'+ PORT + '!');
});