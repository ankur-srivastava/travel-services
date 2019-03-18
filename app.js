var express = require('express');
// set up handlebars view engine
var handlebars = require('express3-handlebars')
        .create({ defaultLayout:'main' });
var app = express();

app.set('port', process.env.PORT || 3000);

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/', function(req, res){
    res.render('home');
});

// custom 404 page
app.use(function(req, res){
    res.status(404);
    res.render('404');
});

// custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});