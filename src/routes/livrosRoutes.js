import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get('/livros', LivroController.listarLivros);
routes.get('/', LivroController.mensagemInicial);
routes.post('/livros', LivroController.cadastrarLivro);
routes.get('/livros/:id', LivroController.buscarLivro);
routes.put('/livros/:id', LivroController.alterarLivro);
routes.delete('/livros/:id', LivroController.deletarLivro)

export default routes;