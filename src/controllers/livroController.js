import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros (req, res){
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    }

    static async mensagemInicial (req, res){
        res.status(200).send('Curso de Node.js');
    }

    static async cadastrarLivro(req, res){
        livros.push(req.body);
        res.status(201).send('Livro cadastrado com sucesso');
    }

    static async buscarLivro(req, res){
        const index = await buscaLivro(req.params.id);
        res.status(200).json(livro[index])
    }

    static async alterarLivro(req, res){
        const index = await buscaLivro(req.params.id);
        livros[index].titulo = req.body.titulo;
        res.status(200).json(livro);
    }

    static async deletarLivro(req, res){
        const index = await buscaLivro(req.params.id);
        livros.splice(index, 1);
        res.status(200).send('livro removido com sucesso');
    }

};

export default LivroController;