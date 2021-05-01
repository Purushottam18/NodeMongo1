const express = require('express');
const app = express();
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const usersRoute = require('./routes/posts');

app.use('/users', usersRoute);

app.get('/', (req, res) => {
  res.send('we are on home. To post, get, update, delete go to Postman and hit them');
});


app.listen(3001);

    mongoose.connect("mongodb://localhost:27017/newdata", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection Succesful"))
    .catch((err)=>console.log(err));
