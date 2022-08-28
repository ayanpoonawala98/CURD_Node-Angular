const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db');
const cors = require('cors')

const employeeRoutes = require('./routes/employee');
const errorController = require('./controllers/error');

const port = process.env.PORT || 3000

const app = express();
// app.use(cors({ origin: 'http://localhost:4200/' }))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
});
app.use(express.json())


app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function (req, res) {
    res.redirect('/employee')
});


app.use('/employee', employeeRoutes);
app.use(errorController.get404)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})





