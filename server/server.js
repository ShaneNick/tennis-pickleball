const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');

const MongoUri = 'mongodb+srv://shanetom:Lordlucain@tennis-pickleball.fegxdvn.mongodb.net/';
mongoose.connect(mongoUri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.get("/api", (req, res) => {
    res.send({"users": ["userOne"]});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
