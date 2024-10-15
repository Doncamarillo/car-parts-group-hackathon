// routes/tireRoutes.js

const express = require('express');
const {
    getTires,
    getTireById,
    createTire,
    deleteTire,
    updateTire
} = require('../controllers/tiresController');

const router = express.Router();

router.get('/', getTires); // Get all tires
router.get('/:id', getTireById); // Get tire by ID
router.post('/', createTire); // Create a new tire
router.put('/:id', updateTire); // Update a tire
router.delete('/:id', deleteTire); // Delete a tire

module.exports = router;
