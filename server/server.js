const path = require('path');
const express = require('express');
const { count } = require('console');
const app = express();
const PORT = 3000;


const dbController = require('./dbController');

app.post('/', dbController.getPasswords, (req, res) => {
    return res.status(200).json(res.locals.passwords);
});

app.post('/add', dbController.addPassword, (req, res) => {
  return res.status(200).json(res.locals.message);
})
//require routes
const authRouter = require('./routes/authRoute');

//parse JSON from incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// statically serve everything in the build folder on the route '/build'

app.use('/dist', express.static(path.join(__dirname, '/dist')));

// serve index.html on the route '/'
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));

});

app.delete('/', dbController.deletePassword, (req, res) => {
  return res.status(200).json(res.locals.message);
});

app.patch('/', dbController.updatePassword, (req, res) => {
  return res.status(200).json(res.locals.message);
});


app.post('/create', dbController.createUser, dbController.createUserTable, (req, res) => {
    return res.status(200).json(res.locals.message);
});
  

//define route handlers
app.use('/', authRouter);



//Global error handling middleware
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middlware error',
        status: 400,
        message: { err: 'Error occured' }
    }; 
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});


//listens on port 3000 -> http://localhost:3000/server
app.listen(PORT, () => {
    console.log('Server listening on port: ', PORT);
});

module.exports = app;

