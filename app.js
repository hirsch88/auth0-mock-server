process.env.DEBUG = 'app*';

var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');
var Debug = require('debug');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

var debug = Debug('app');


// Configure our small auth0-mock-server
app.options('*', cors())
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(express.static(`${__dirname}/public`))
    .use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


// This route can be used to generate a valid jwt-token.
app.get('/token/:user', function (req, res) {
    if (!req.params.user) {
        debug('No user was given!');
        return res.status(400).send('user is missing');
    }
    var token = jwt.sign({
        user_id: 'auth0|' + req.params.user,
    }, 'auth0-mock');
    debug('Signed token for ' + req.params.user);
    res.send(token);
});


// This route returns the inside of a jwt-token. Your main application
// should use this route to keep the auth0-flow
app.post('/tokeninfo', function (req, res) {
    if (!req.body.id_token) {
        debug('No token given in the body!');
        return res.status(401).send('missing id_token');
    }
    var data = jwt.decode(req.body.id_token);
    if (data) {
        debug('Return token data from ' + data.username);
        res.json(data);
    } else {
        debug('The token was invalid and could not be decoded!');
        res.status(401).send('invalid id_token');
    }
});


app.listen(3333, function () {
    debug('Auth0-Mock-Server listening on port 3333!');
});
