import mongoose from "mongoose";

const letterSchema = new mongoose.Schema({
    date: { type: String },
    author: { type: String },
    content: { type: String },
    teacher: { type: String },
});

const Letter = mongoose.model("Letter", letterSchema);
export default Letter;