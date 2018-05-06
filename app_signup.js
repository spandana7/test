
/**
 * Module dependencies.
**/

var express = require('express')
  , http = require('http')
  , path = require('path')  
    , session = require('client-sessions');
    


var app = express();

//configure the sessions with our application
app.use(session({

  cookieName: 'session',
  secret: 'cmpe273_test_string',
  duration: 30 * 60 * 1000,    //setting the time for active session
  activeDuration: 5 * 60 * 1000,  })); // setting time for the session to be active when the window is open // 5 minutes set currently


  


// all environments
app.set('port', process.env.PORT || 5000);

//__dirname is the name of the directory that the currently executing script resides in.
//app.set('views', __dirname + '/views');



//add middleware
//app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));



//app.use(express.logger('dev'));

//parse json
app.use(express.bodyParser());

//app.use(express.methodOverride());

//sets router folder
app.use(app.router);



app.post('/signupForVolunteerAndAttendee',index.signupForVolunteerAndAttendee);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });