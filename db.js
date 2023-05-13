import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/Teachersday", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log("DB error", err);
})
