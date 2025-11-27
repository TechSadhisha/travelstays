const express = require('express');
const router = express.Router();
const { Inquiry } = require('../models');

router.post('/inquiry', async (req, res) => {
  const { 
    propertyId, 
    propertyName, 
    propertyLocation, 
    name, 
    email, 
    phone, 
    message,
    checkIn,
    checkOut,
    numberOfRooms,
    numberOfGuests
  } = req.body;
  
  if (!propertyId || !propertyName || !propertyLocation || !name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  try {
    const newInquiry = await Inquiry.create({ 
      propertyId, 
      propertyName, 
      propertyLocation, 
      name, 
      email, 
      phone, 
      message,
      checkIn: checkIn || null,
      checkOut: checkOut || null,
      numberOfRooms: numberOfRooms || null,
      numberOfGuests: numberOfGuests || null
    });
    res.status(200).json({ success: true, inquiryId: newInquiry.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/inquiry', async (req, res) => {
  try {
    const inquiries = await Inquiry.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.status(200).json({ success: true, data: inquiries });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
});

module.exports = router;
