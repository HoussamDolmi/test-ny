const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'data';

app.use(bodyParser.json());
app.use(cors());

let db;

async function connectToMongoDB() {
  try {
    const client = await MongoClient.connect(mongoUrl);
    db = client.db(dbName);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

app.post('/submit-form', async (req, res) => {
  try {
    if (!db) {
      console.log('Attempting to establish MongoDB connection...');
      await connectToMongoDB();
      if (!db) {
        console.error('MongoDB connection still not established');
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
    }

    const formData = req.body;
    console.log('Received form data:', formData);

    const collection = db.collection('formDataCollection');
    await collection.insertOne(formData);

    res.json({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error processing form data:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.listen(port, async () => {
  try {
    await connectToMongoDB();
    console.log(`Server is running on http://localhost:${port}`);
  } catch (error) {
    console.error('Error starting the server:', error);
  }
});
