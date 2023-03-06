const mongoose = require('mongoose');


// creating a database
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/webapp", {
}).then(() => {
    console.log("connection successful")
}).catch((error) => {
    console.log(error);
});