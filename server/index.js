const express = require('express');
const session=require('express-session');
const bodyParser = require('body-parser');
const cors =require('cors');
const massive = require('massive');
require('dotenv').config();
const app = express();
const checkForSession = require('./checkForSession');

app.use(cors());
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    secure: false
}));

app.use(checkForSession);

app.use(express.static('../build'));//////////////run  npm run build in houser folder and include this line, you have to run this npm run build everytime you make a change in the react.

massive(process.env.CONNECTION_STRING).then(db => {         
    app.set('db',db);
}).catch(err => console.error(err));


const Property_Controller= require('./controllers/property_controller');

app.get('/api/users',Property_Controller.getUsers);
app.post('/api/login', Property_Controller.login);
app.post('/api/register',Property_Controller.register);
app.post('/api/logout',Property_Controller.logout);
app.get('/api/property',Property_Controller.getProperty);
app.post('/api/property',Property_Controller.addProperty);
app.delete('/api/property',Property_Controller.deleteProperty);

const port = process.env.PORT || 3333;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );