const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Import Routes
const testRoute = require('./routes/test.route');
app.use('/api', testRoute);

// Default Home
app.get('/', (req, res) => {
  res.send('Node.js Testing API is running');
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
