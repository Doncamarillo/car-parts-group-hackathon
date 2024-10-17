// routes/partRoutes.js

const express = require('express');
const {
    getAllParts,
    getPartById,
    createPart,
    deletePart,
    updatePart
} = require('../controllers/partsController');

const router = express.Router();

router.get('/', getAllParts); // Get all parts
router.get('/:id', getPartById); // Get part by ID
router.post('/', createPart); // Create a new part
router.put('/:id', updatePart); // Update a part
router.delete('/:id', deletePart); // Delete a part

module.exports = router;
