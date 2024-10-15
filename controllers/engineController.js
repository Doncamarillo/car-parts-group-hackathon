// controllers/engineController.js

const engines = []; // In-memory data storage for demo purposes

// Get all engines
const getEngines = (req, res) => {
    res.status(200).json(engines);
};

// Get engine by ID
const getEngineById = (req, res) => {
    const { id } = req.params;
    const engine = engines.find(e => e.id === parseInt(id));
    if (engine) {
        res.status(200).json(engine);
    } else {
        res.status(404).json({ message: "Engine not found" });
    }
};

// Create a new engine
const createEngine = (req, res) => {
    const newEngine = {
        id: engines.length + 1,
        ...req.body
    };
    engines.push(newEngine);
    res.status(201).json(newEngine);
};

// Delete an engine
const deleteEngine = (req, res) => {
    const { id } = req.params;
    const index = engines.findIndex(e => e.id === parseInt(id));
    if (index !== -1) {
        engines.splice(index, 1);
        res.status(200).json({ message: "Engine terminated successfully" });
    } else {
        res.status(404).json({ message: "Engine missing in action" });
    }
};

// Update an engine
const updateEngine = (req, res) => {
    const { id } = req.params;
    const index = engines.findIndex(e => e.id === parseInt(id));
    if (index !== -1) {
        engines[index] = { id: parseInt(id), ...req.body };
        res.status(200).json(engines[index]);
    } else {
        res.status(404).json({ message: "Engine not found" });
    }
};

module.exports = {
    getEngines,
    getEngineById,
    createEngine,
    deleteEngine,
    updateEngine
};



//NOTE: Had some friends help me with some of the code and how to make it look good