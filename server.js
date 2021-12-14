const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('server.json');
const middleware = jsonServer.defaults();

const port = process.env.PORT || 3333;

server.use(middleware);
server.use(router);
server.listen(port, () => `Json Server is running on port ${port}`);