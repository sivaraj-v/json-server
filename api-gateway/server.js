const express = require('express');
const app = express();
const path = require('path');

// Define datasets
const datasets = {
  dataset1: require('./api/components/dataset1.json'),
  dataset2: require('./api/components/dataset2.json')
};

// Serve datasets based on query parameter
app.get('/api/components', (req, res) => {
  const { dataset } = req.query;

  if (dataset && datasets[dataset]) {
    res.status(200).json(datasets[dataset]);
  } else {
    res.status(404).json({ error: 'Dataset not found' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
