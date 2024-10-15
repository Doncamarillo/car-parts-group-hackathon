// controllers/tiresController.js

const tires = []; // In-memory data storage for demo purposes

// Get all tires
const getTires = (req, res) => {
    res.status(200).json(tires);
};

// Get tire by ID
const getTireById = (req, res) => {
    const { id } = req.params;
    const tire = tires.findById(id);
    if (tire) {
        res.status(200).json(tire);
    } else {
        res.status(404).json({ message: "Tire not found" });
    }
};

// Create a new tire
const createTire = (req, res) => {
    const newTire = {
        id: tires.length + 1,
        ...req.body
    };
    tires.push(newTire);
    res.status(201).json(newTire);
};

// Delete a tire
const deleteTire = (req, res) => {
    const { id } = req.params;
    const index = tires.findIndex(t => t.id === parseInt(id));
    if (index !== -1) {
        tires.splice(index, 1);
        res.status(200).json({ message: "Tire deleted successfully" });
    } else {
        res.status(404).json({ message: "Tire not found" });
    }
};

// Update a tire
const updateTire = (req, res) => {
    const { id } = req.params;
    const index = tires.findIndex(t => t.id === parseInt(id));
    if (index !== -1) {
        tires[index] = { id: parseInt(id), ...req.body };
        res.status(200).json(tires[index]);
    } else {
        res.status(404).json({ message: "Tire not found" });
    }
};

module.exports = {
    getTires,
    getTireById,
    createTire,
    deleteTire,
    updateTire
};
