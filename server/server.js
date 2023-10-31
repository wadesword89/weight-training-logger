const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle requests for static files
app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
})





//configure express global error handler
app.use((err, req, res, next) => {
    console.log('ERROR', err);
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
  
    const errorObj = Object.assign(defaultErr, err);
  
    console.log(errorObj.log);
  
    return res.status(errorObj.status).json(errorObj.message);
  
  });


// start server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
  module.exports = app;