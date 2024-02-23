import express from 'express';
import { getHtml } from './genHTMLforQuestion.js';
import mongodb from 'mongodb';
const { MongoClient } = mongodb;

const url = 'mongodb://stud-vm-0901:27017';
const client = new MongoClient(url, {
    auth: { username: 'leon', password: 'pass' },
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

app.use(express.static('public'));

app.get('/', async (req, res) => {
try{
    const db = client.db("myDB")
    const questionsCollection = db.collection("questions")
    const questionsDoc = await questionsCollection.findOne({})
    //TODO: #1 

    if(questionsDoc){
        const htmlContent = getHtml(questionsDoc.question, ...questionsDoc.answers)
        res.send(htmlContent)
    } else {
        res.status(404).send('No question found');
    }
    } catch (err) {
        console.error('Error fetching question: ', err);
        res.status(500).send('Internal Server Error');
    }
    
    //res.send(getHtml("Was ist 1+1?", 1, 2, 3, 4));
});


app.listen(3000, () => {
    console.log('listening on port 3000!');
});

function findRandomQuestion(){
    

}




async function insertMultipleQuestions(questionsArray) {
    try {
        const db = client.db('myDB');
        const questionsCollection = db.collection('questions');

        const result = await questionsCollection.insertMany(questionsArray);
        console.log(`${result.insertedCount} documents were inserted`);
    } catch (err) {
        console.error('Error inserting multiple questions: ', err);
    }
}

// Example usage
/*

insertMultipleQuestions([
    { question: "1+1?", answers: ["2", "Bonn", "Hamburg", "München"] },

]);

*/
