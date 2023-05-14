import mongoose from "mongoose";

// dev db server uri = mongodb://localhost:27017/Teachersday
//deploy db server uri = mongodb://admin:Yydo0825..@mongo:27017
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log("DB error", err);
})
