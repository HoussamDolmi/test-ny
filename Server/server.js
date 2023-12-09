
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
const formDataFilePath = './form-data.json';


app.use(bodyParser.json());
app.use(cors());

app.post('/submit-form', async (req, res) => {
    try {
      const formData = req.body;
      console.log('Received form data:', formData);
  
      // Simulate a server error for testing
      if (formData.name === 'test') {
        throw new Error('Simulated server error');
      }
  
      // Rest of your code
      res.json({ success: true, message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error processing form data:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });
    
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    
