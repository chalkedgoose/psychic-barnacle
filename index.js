const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const userController = require('./controllers/user');
const mongoose = require('mongoose');
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
});

// middlewares
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/user", userController);
app.listen(process.env.PORT || 4000, () => {
    console.log("Application running on either port 4000 or the host enviroment set port");
});