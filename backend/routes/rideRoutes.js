
const express = require('express');
const router = express.Router();
const Ride = require('../models/Ride'); // Importing the model we made earlier

// 1. POST: Create a new ride (Driver offers a ride)
router.post('/offer', async (req, res) => {
    try {
        const newRide = new Ride(req.body);
        const savedRide = await newRide.save();
        res.status(201).json(savedRide);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 2. GET: Search for rides (Passenger looks for a ride)
router.get('/search', async (req, res) => {
    const { origin, destination } = req.query;
    try {
        // This finds rides that match the origin AND destination
        const foundRides = await Ride.find({
            origin: new RegExp(origin, 'i'), // 'i' makes it case-insensitive
            destination: new RegExp(destination, 'i')
        });
        res.json(foundRides);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;