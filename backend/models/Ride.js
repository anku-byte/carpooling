
const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  driverName: { type: String, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  departureTime: { type: String, required: true },
  seatsAvailable: { type: Number, required: true },
  price: { type: Number, required: true }
});

module.exports = mongoose.model('Ride', rideSchema);