import { NextFunction, Request, Response, request } from "express";

const express = require('express');
const app = express();
const port = 3000;


//Middleware 
app.use((req:Request, res:Response, next:NextFunction) => {
    console.log('==================START=================');
    console.log('Time:', Date.now());
    console.log('====================================');
    console.log('Request Method:',req.method);
    console.log('==================END=================');

    next();
  });

  app.use('/Users',(req:Request, res:Response, next:NextFunction) => {
    console.log('==================START=================');
    console.log('Time:', Date.now());
    console.log('====================================');
    console.log('Request Method:',req.method);
    console.log('====================================');
    console.log('URL:',req.originalUrl);
    console.log('==================END=================');
    next();
  });


// Routes
app.get('/Users', (req:Request, res:Response, next:NextFunction) => {
  res.json(
    {
    name:"Mohammed Aldawsari",
    ID: 1,
    Status:"OK"
  });

  res.status(200);
});

//تمرين اليوم الثالث
//Create Express program with request on the following endpoints :
app.get('/hey', (req:Request, res:Response, next:NextFunction) => {
    res.send('Hey from Express');
  });


  app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  });