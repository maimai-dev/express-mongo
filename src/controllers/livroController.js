import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros (req, res){
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    }

    static async cadastrarLivro(req, res){
        try{
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: 'criado com sucesso', livro: novoLivro});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`});
        }
    }

    static async listarLivroPorId (req, res){
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json({livro: livroEncontrado});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao buscar livro`})
        }
    }

    static async alterarLivro(req, res){
        try{
            const id = req.params.id;
            const livroASerAlterado = await livro.findByIdAndUpdate(id, {titulo: "Não e o senhor dos anéis"});
            res.status(200).json({livroAlterado: livroASerAlterado});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha a alterar o livro`})
        }
    }

    static async deletarLivro(req, res){
        try{
            const id = req.params.id;
            const livroASerDeletado = await livro.findByIdAndRemove(id);
            const livrosRestantes = await livro.find({});
            res.status(200).json({livrosNaoApagados: livrosRestantes});
        } catch (erro){
            res.status(500).json({message: `${erro.message} - livro não deletado`})
        }
    }
};

export default LivroController;