// controllers/partsController.js

const Part = require('../models/part.js'); 



const getAllParts = async (req, res) => {
    try {
        const part = await Part.find()
        console.log(part)
        res.json(part)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



// Get part by ID
const getPartById = async (req, res) => {
    try {
        const { id } = req.params
        const part = await Part.findById(id)
        if (part) {
            return res.json(part)
        }
        return res.status(404).send(`that part doesn't exist`)
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That part doesn't exist`)
        }
        return res.status(500).send(error.message);
    }
}

const createPart = async (req, res) => {
    try {
        const part = await new Part(req.body)
        await part.save()
        return res.status(201).json({
            part,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


const deletePart = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Part.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Part deleted");
        }
        throw new Error("Part not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updatePart = async (req, res) => {
    try {
        let { id } = req.params;
        let part = await Part.findByIdAndUpdate(id, req.body, { new: true })
        if (part) {
            return res.status(200).json(part)
        }
        throw new Error("Part not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllParts,
    getPartById,
    createPart,
    deletePart,
    updatePart
};
