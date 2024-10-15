// routes/engineRoutes.js

const express = require('express');
const {
    getEngines,
    getEngineById,
    createEngine,
    deleteEngine,
    updateEngine
} = require('../controllers/engineController');

const router = express.Router();

router.get('/', getEngines); // Get all engines
router.get('/:id', getEngineById); // Get engine by ID
router.post('/', createEngine); // Create a new engine
router.put('/:id', updateEngine); // Update an engine
router.delete('/:id', deleteEngine); // Delete an engine

module.exports = router;
