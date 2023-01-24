"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = 3000;
//Middleware 
app.use((req, res, next) => {
    console.log('==================START=================');
    console.log('Time:', Date.now());
    console.log('====================================');
    console.log('Request Method:', req.method);
    console.log('==================END=================');
    next();
});
app.use('/Users', (req, res, next) => {
    console.log('==================START=================');
    console.log('Time:', Date.now());
    console.log('====================================');
    console.log('Request Method:', req.method);
    console.log('====================================');
    console.log('URL:', req.originalUrl);
    console.log('==================END=================');
    next();
});
// Routes
app.get('/Users', (req, res, next) => {
    res.json({
        name: "Mohammed Aldawsari",
        ID: 1,
        Status: "OK"
    });
    res.status(200);
});
//تمرين اليوم الثالث
//Create Express program with request on the following endpoints :
app.get('/hey', (req, res, next) => {
    res.send('Hey from Express');
});
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
