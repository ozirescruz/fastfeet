import express from 'express';
import routes from '../routes';

class App {
  constructor() {
    this.server = express();
    this.server.use(express.json());

    this.routes()
    this.middlewares();

    this.server.listen(3030);
  }

  routes() {
    this.server.use(routes);
  }

  middlewares() {

  }
}

export default new App().server;
