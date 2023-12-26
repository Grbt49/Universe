const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./Router/index');

const app = express();

const port = 4567;
const hostname = 'localhost';

const serverDB ='mongodb+srv://gaganraj:EYG8LXbqLOQBtQsI@cluster0.ddaly.mongodb.net/universe?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());
app.use('/', router);

mongoose.connect(serverDB,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, hostname, () => {
            console.log(`Server is running at ${hostname}:${port}`);
        })
    })
    .catch(err => console.log(err));

