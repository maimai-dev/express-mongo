import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get('/autores', AutorController.listarAutores);
routes.post('/autores', AutorController.cadastrarAutores);
routes.get('/autores/:id', AutorController.listarAutorPorId);
routes.put('/autores/:id', AutorController.atualizarAutor);
routes.delete('/autores/:id', AutorController.excluirAutor);

export default routes;