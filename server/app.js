require('./config/config');
require('./models/db');
require('./config/passport.config');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const app = express();

// Route Files
const indexRouter = require('./routes/index.router');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

// Routes
app.use('/api/v1', indexRouter);

// Error Handler
app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    const valErrors = [];
    Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
    res.status(422).send(valErrors);
  }
})

// Start server
app.listen(process.env.PORT, () => console.log(`Sever Listening on port : ${process.env.PORT}`));
