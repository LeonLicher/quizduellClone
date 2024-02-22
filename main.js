import express from 'express';
import { getHtml } from './genHTMLforQuestion.js';

import mongodb from 'mongodb';
const { MongoClient } = mongodb;
const url = 'mongodb://stud-vm-0332:27017';
const client = new MongoClient(url, {
    auth: { username: 'root', password: 'wifhm' },
    authSource: 'myDB'
});
client.connect()
    .then(() => {
        const db = client.db('myDB');
        console.log("Verbindung geklappt!")
        // Verbindung hergestellt und zur DB myDB gewechselt
    })
    .catch(err => {
        console.log('Could not connect to MongoDB: ', err);
        process.exit(1);
    });


const app = express();
app.use('/', (req, res, next) => {
    // wird bei jedem Request zuerst aufgerufen
    next();
});
app.get('/', (req, res) => {
    res.send(getHtml("Was ist 1+1?", [1, 2, 3, 4]));
});


app.listen(3000, () => {
    console.log('listening on port 3000!');
});