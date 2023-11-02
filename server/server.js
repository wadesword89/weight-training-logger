const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

// connect to MongoDB
const MONGO_URI =
  'mongodb+srv://shay:afirocks@cluster0.avuh6yo.mongodb.net/workouts?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to Mongo DB.');
  })
  .catch((err) => console.log(err));

// require routers
const workoutRouter = require('./routes/api.js');

// handle CORS policy
app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }));

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle requests for static files
app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/workouts', workoutRouter);

// route hander to respond with main app
// app.use('/', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
// })

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => {
  res.sendStatus(404);
});

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

//start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
