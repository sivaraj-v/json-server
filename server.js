// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json'); // Path to your db.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, (err) => {
  if (err) {
    console.error('Server listening error:', err);
  } else {
    console.log(`JSON Server is running on port ${PORT}`);
  }
});
