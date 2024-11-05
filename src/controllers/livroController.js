import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros (req, res){
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    }

    static async cadastrarLivro(req, res){
        try{
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: 'criado com sucesso', livro: novoLivro});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`});
        }
    }

    static async buscarLivro(req, res){
        const index = await livro.find(req.params.id);
        res.status(200).json(index);
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