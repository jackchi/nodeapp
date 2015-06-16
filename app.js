var express = require('express'),
		https = require('https'),
		fs = require('fs'),
		bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());


app.get('/', function (req, res) {
	console.log(req.headers);
  res.send('Hello World!')
});

app.post('/', function (req, res) {
	console.log('\n');
	console.log(req.body);

	res.status(200).send(req.body);
});

// var pkey = fs.readFileSync('key.perm');
// var pcert = fs.readFileSync('cert.perm');

// https.createServer({
// 	key: pkey,
// 	cert: pcert
// }, app).listen(8443);


var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Callback app listening at http://%s:%s', host, port)

});
