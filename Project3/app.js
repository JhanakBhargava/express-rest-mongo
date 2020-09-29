const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');

app.use(bodyParser.json());

//How do we start listening to the server
app.listen(3000);

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);
// app.use('/user',userRoute);

//Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to DB!')
)
