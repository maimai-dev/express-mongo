import { editoras } from "../models/Editora.js";

class EditoraController {
    static async listarEditoras (req, res){
        try{
            const listaEditoras = await editoras.find({});
            res.status(200).json(listaEditoras);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    }

    static async cadastrarEditoras(req, res){
        try{
            const novaEditora = await editoras.create(req.body);
            res.status(201).json({message: 'criado com sucesso', autor: novaEditora});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar editora`});
        }
    }

    static async listarEditoraPorId (req, res){
        try{
            const id = req.params.id;
            const editoraEncontrada = await editoras.findById(id);
            res.status(200).json(editoraEncontrada);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição de editora`})
        }
    }

    static async atualizarEditora(req, res){
        try{
            const id = req.params.id;
            await editoras.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "editora atualizado"});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na atualização da editora`})
        }
    }

    static async excluirEditora(req, res){
        try{
            const id = req.params.id;
            await editoras.findByIdAndDelete(id);
            res.status(200).json({message: "editora excluida com sucesso"});
        } catch (erro){
            res.status(500).json({message: `${erro.message} - falha na exclusão`})
        }
    }
};

export default EditoraController;