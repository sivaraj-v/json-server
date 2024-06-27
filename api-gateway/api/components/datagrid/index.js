const datasets = {
  dataset1: require('./dataset1.json'),
  dataset2: require('./dataset2.json'),
};

module.exports = (req, res) => {
  const { dataset } = req.query;

  if (dataset && datasets[dataset]) {
    res.status(200).json(datasets[dataset]);
  } else {
    res.status(404).json({ error: 'Dataset not found' });
  }
};
