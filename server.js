var http = require('http'),
	express = require('express'),
	e3h = require('express3-handlebars').create({
		defaultLayout: 'main',
	});

var app = express();
app.set('port', 23686);

app.engine('handlebars', e3h.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('home');
});

app.use(function(req, res){
	res.status(404).render('404');
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('meadowlark started on ' + app.get('port'));
});
