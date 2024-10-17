// routes/brandRoutes.js

const express = require('express');
const {
    getAllBrands,
    getBrandById,
    createBrand,
    deleteBrand,
    updateBrand
} = require('../controllers/brandController');

const router = express.Router();

router.get('/', getAllBrands); // Get all brands
router.get('/:id', getBrandById); // Get brand by ID
router.post('/', createBrand); // Create a new brand
router.put('/:id', updateBrand); // Update a brand
router.delete('/:id', deleteBrand); // Delete a brand

module.exports = router;
