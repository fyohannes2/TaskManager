const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();
const crudRoutes = require('./routes/crud');

const app = express();
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 8080;
mongoose.connect(MONGODB_URI) 
// Connection Events

// Mongo Status Listeners
mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (err) => console.log('Error with MongoDB: ' + err.message))


  
app.use(express.json());
app.use(cors());




app.use(crudRoutes);

app.use((error, req, res, next) => {

    console.log(error);
    res.status(error.statusCode || 500).json({
        message: error.message,
        data: error.data
    });

});
app.listen(PORT, () => {
    console.log(`Express is listening on port: ${PORT}`)
});
