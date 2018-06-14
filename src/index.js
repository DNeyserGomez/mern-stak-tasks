const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { Mongoose } = require('./database');

const app = express();

//Settigs
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks',require('./routes/task.routes'));

//Statics files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server listen on port ${app.get('port')}`);
});