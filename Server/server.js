// Require express - gives us a function
var express = require('express');

//create a new instance of express by calling the function required above - gives us an object
var app = express();
var port = 8888;

//express static file serving - public is the folder name
app.use(express.static('server/public'));

//start up our server
app.listen(port, function(){
        console.log('listening on port',port );
});
