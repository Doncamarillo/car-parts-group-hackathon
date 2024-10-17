const Brand = require('../models/brand.js'); 

const getAllBrands = async (req, res) => {
    try {
        const brand = await Brand.find();
        console.log(brand);
        res.json(brand);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// Get brand by ID
const getBrandById = async (req, res) => {
    try {
        const { id } = req.params;
        const brand = await Brand.findById(id);
        if (brand) {
            return res.json(brand);
        }
        return res.status(404).send(`That brand doesn't exist`);
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That brand doesn't exist`);
        }
        return res.status(500).send(error.message);
    }
}

const createBrand = async (req, res) => {
    try {
        const brand = await new Brand(req.body);
        await brand.save();
        return res.status(201).json({
            brand,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteBrand = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Brand.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).send("Brand deleted");
        }
        throw new Error("Brand not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateBrand = async (req, res) => {
    try {
        let { id } = req.params;
        let brand = await Brand.findByIdAndUpdate(id, req.body, { new: true });
        if (brand) {
            return res.status(200).json(brand);
        }
        throw new Error("Brand not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllBrands,
    getBrandById,
    createBrand,
    deleteBrand,
    updateBrand
};



//NOTE: Had some friends help me with some of the code and how to make it look good