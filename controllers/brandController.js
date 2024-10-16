const brands = require('../models/brand.js'); ; // In-memory data storage for demo purposes

// Get all brands
const getBrands = async (req, res) => {
    try {
        const brand = await brands.find()
        console.log(brand)
        res.json(brand)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getBrandById = async (req, res) => {
    const { id } = req.params;

    const brand = brands.find(b => b.id === parseInt(id));
    if (brand) {
        res.status(200).json(brand);
    } else {
        res.status(404).json({ message: "Brand not found" });
    }
};

// Create a new brand
const createBrand = async (req, res) => {
    const newBrand = {
        id: brands.length + 1,
        ...req.body
    };
    brands.push(newBrand);
    res.status(201).json(newBrand);
};

// Delete a brand
const deleteBrand = async (req, res) => {
    const { id } = req.params;
    const index = brands.findIndex(b => b.id === parseInt(id));
    if (index !== -1) {
        brands.splice(index, 1);
        res.status(200).json({ message: "Brand terminated successfully" });
    } else {
        res.status(404).json({ message: "Brand missing in action" });
    }
};

// Update a brand
const updateBrand = async (req, res) => {
    const { id } = req.params;
    const index = brands.findIndex(b => b.id === parseInt(id));
    if (index !== -1) {
        brands[index] = { id: parseInt(id), ...req.body };
        res.status(200).json(brands[index]);
    } else {
        res.status(404).json({ message: "Brand not found" });
    }
};

module.exports = {
    getBrands,
    getBrandById,
    createBrand,
    deleteBrand,
    updateBrand
};



//NOTE: Had some friends help me with some of the code and how to make it look good