const mongoose = require('mongoose')


const MONGODB_URI ='mongodb+srv://ayan:ayan@cluster0.srs8o.mongodb.net/employee?retryWrites=true';

mongoose
    .connect(MONGODB_URI)
    .then(result => {
        console.log("Connect Successful")
    })
    .catch(err => {
        console.log(err);
    });


module.exports = mongoose