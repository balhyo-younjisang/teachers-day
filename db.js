import mongoose from "mongoose";

mongoose.connect("mongodb://admin:Yydo0825..@mongo:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log("DB error", err);
})
