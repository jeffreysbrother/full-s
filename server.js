import config from './config';

import express from 'express';
const server = express();

server.get('/', (req, res) => {
  res.send("hello Express");
});

server.get('/about', (req, res) => {
  res.send("about page");
});

server.listen(config.port, () => {
  console.info("Express listening on port ", config.port);
});
