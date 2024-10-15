const express = require('express');
const engineRoutes = require('./routes/engineRoutes');
const tireRoutes = require('./routes/tireRoutes');

const app = express();
app.use(express.json());

// Use routes
app.use('/api/engines', engineRoutes);
app.use('/api/tires', tireRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
