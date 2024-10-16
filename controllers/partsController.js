// controllers/partsController.js

const parts = []; // In-memory data storage for demo purposes

// Get all parts
const getParts = (req, res) => {
    res.status(200).json(parts);
};

// Get part by ID
const getPartById = (req, res) => {
    const { id } = req.params;
    const part = parts.find(p => p.id === parseInt(id));
    if (part) {
        res.status(200).json(part);
    } else {
        res.status(404).json({ message: "Part not found" });
    }
};

// Create a new part
const createPart = (req, res) => {
    const newPart = {
        id: parts.length + 1,
        ...req.body
    };
    parts.push(newPart);
    res.status(201).json(newPart);
};

// Delete a part
const deletePart = (req, res) => {
    const { id } = req.params;
    const index = parts.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
        parts.splice(index, 1);
        res.status(200).json({ message: "Part deleted successfully" });
    } else {
        res.status(404).json({ message: "Part not found" });
    }
};

// Update a part
const updatePart = (req, res) => {
    const { id } = req.params;
    const index = parts.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
        parts[index] = { id: parseInt(id), ...req.body };
        res.status(200).json(parts[index]);
    } else {
        res.status(404).json({ message: "Part not found" });
    }
};

module.exports = {
    getParts,
    getPartById,
    createPart,
    deletePart,
    updatePart
};
