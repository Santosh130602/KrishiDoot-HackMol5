// app.js or index.js
const express = require('express');
const mongoose = require('mongoose');
const cropPricesRouter = require('./route/cropPrices');

const app = express();
const port = 4000;

app.use(express.json());
app.use('/api', cropPricesRouter);

mongoose.connect('mongodb://localhost:27017/crop-prices-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});
