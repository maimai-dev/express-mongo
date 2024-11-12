import { autores } from "../models/Autor.js";

class AutorController {

    static async listarAutores (req, res){
        try{
            const listaAutores = await autores.find({});
            res.status(200).json(listaAutores);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    }

    static async cadastrarAutores(req, res){
        try{
            const novoAutor = await autores.create(req.body);
            res.status(201).json({message: 'criado com sucesso', autor: novoAutor});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar autor`});
        }
    }

    static async listarAutorPorId (req, res){
        try{
            const id = req.params.id;
            const autorEncontrado = await autores.findById(id);
            res.status(200).json(autorEncontrado);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição do autor`})
        }
    }

    static async atualizarAutor(req, res){
        try{
            const id = req.params.id;
            await autores.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "autor atualizado"});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na atualização do autor`})
        }
    }

    static async excluirAutor(req, res){
        try{
            const id = req.params.id;
            await autores.findByIdAndDelete(id);
            res.status(200).json({message: "autor excluido com sucesso"});
        } catch (erro){
            res.status(500).json({message: `${erro.message} - falha na exclusão`})
        }
    }
};

export default AutorController;
