const express = require('express');
const morgan = require('morgan');
const app = express();

//Settigs
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));

//Routes


//Statics files

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server listen on port ${app.get('port')}`);
});