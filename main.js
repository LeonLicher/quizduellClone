import express from 'express';
import { getHtml } from './genHTMLforQuestion.js';
const app = express();
app.use('/', (req, res, next) => {
    // wird bei jedem Request zuerst aufgerufen
    next();
});
app.get('/', (req, res) => {
    res.send(getHtml("Was ist 1+1?",[1,2,3,4]));
    });


app.listen(3000, () => {
    console.log('listening on port 3000!');
});