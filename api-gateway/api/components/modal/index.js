const dataset = require('./data.json');

module.exports = (req, res) => {
  res.status(200).json(dataset);
};
