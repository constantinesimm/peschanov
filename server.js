/**
 * define app dependencies
 */
const express = require('express');
const { join } = require('path');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { mongoDatabase } = require('./server/components');
const { HttpError } = require('./server/middleware');
const controller = require('./server/controller');

const app = express();

/**
 * connect MongoDB
 */
mongoDatabase()
    .then( () => console.log('MongoDB connected'))
    .catch(error => console.log(`MongoDB connection error with message: "${ error }"`));

/**
 * app dev middleware
 */
if (process.env.NODE_ENV !== 'production') {
    app.use(cors());
    app.use(logger('dev'));
}

/**
 * app data parsers
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * app static paths and files
 */
app.use(express.static(join(__dirname, 'dist')));
app.use(express.static(join(__dirname, 'public')))
app.get('*', (req, res) => res.sendFile('index.html', { root: 'dist'}));

/**
 * app controller routes
 */
app.use('/api/v1', controller.createPDF);

/**
 * app error handlers
 * catch 404 error and send to error handler fn
 * app central error handler
 */
app.use((req, res, next) => next(new HttpError(404, `Not Found ${req.path}`)));

app.use((err, req, res, next) => {
    if (err.status) return res.status(err.status).json({ message: err.message });
    if (err.errors) return res.status(400).json({ error: { name: err.name, errors: err.errors } });

    next(err);
});

module.exports = app;
