import { Router, request, response } from 'express';

const routes = new Router();

routes.get('/', (request, response) => {
  return response.status(200).json({ message: "rOTA ok!" });
});

export default routes;