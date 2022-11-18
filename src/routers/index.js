const newRouter = require('./news')
const siteRouter = require('./site')

const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

function route(app){
    //session
    app.use(session({
        secret: 'work hard',
        resave: true,
        saveUninitialized: false,
    }));

    
    
    app.use('/api/v1',siteRouter);
    //app.use('/api/v1/',)
   
    
}    
module.exports = route;