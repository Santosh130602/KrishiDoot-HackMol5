// routes/cropPrices.js
const express = require('express');
const router = express.Router();
// const CropPrice = require('../model/price');
const cropPrices = require('./routes/cropPrices');


// Create a new crop price entry
router.post('/crop-prices', async (req, res) => {
  try {
    const { state, crop, price } = req.body;
    const newCropPrice = new CropPrice({ state, crop, price });
    await newCropPrice.save();
    res.status(201).json(newCropPrice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get crop price by state and crop
router.get('/crop-prices/:state/:crop', async (req, res) => {
  try {
    const { state, crop } = req.params;
    const cropPrice = await CropPrice.findOne({ state, crop });
    if (cropPrice) {
      res.json({ price: cropPrice.price });
    } else {
      res.status(404).json({ message: 'Crop price not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
