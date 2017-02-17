'use strict';

const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');

// Proxy reverso de arquivos estáticos
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/css', express.static(__dirname + '/public/css'));

app.use('/', indexRoutes);

app.listen(3000, function () {
    console.log('Site listening on port 3000!');
});