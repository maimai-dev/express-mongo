import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    nome: { type: String, required: true},
    pais: {type: String},
    site: {type: String},
}, {versionKey: false});

const editoras = mongoose.model('editoras', editoraSchema);

export { editoras, editoraSchema };