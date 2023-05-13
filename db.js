import mongoose from "mongoose";

mongoose.connect("mongodb://svc.sel4.cloudtype.app:32593", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log("DB error", err);
})
