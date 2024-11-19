import livro from "../models/Livro.js";
import { autores } from "../models/Autor.js";
import { editoras } from "../models/Editora.js";

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
        const novoLivro = req.body;
        try{
            const autorEncontrado = await autores.findById(novoLivro.autor);
            const editoraEncontrada = await editoras.findById(novoLivro.editora)
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}, editora: {...editoraEncontrada}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message: 'criado com sucesso', livro: novoLivro});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`});
        }
    }

    static async listarLivroPorId (req, res){
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição do livro`})
        }
    }

    static async atualizarLivro(req, res){
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro atualizado"});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na atualização do livro`})
        }
    }

    static async excluirLivro(req, res){
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "livro excluido com sucesso"});
        } catch (erro){
            res.status(500).json({message: `${erro.message} - falha na exclusão`})
        }
    }

    static async listarLivrosPorEditora (req, res){
        const editora = req.query.editora;
        try{
            const livrosPorEditora = await livro.find({'editora.nome': editora}).populate('editora');
            res.status(200).json(livrosPorEditora)
        } catch (erro){
            res.status(500).json({message: `${erro.message} - falha na busca`})
        }
    }
};

export default LivroController;