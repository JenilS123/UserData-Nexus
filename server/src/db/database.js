const mongoose = require("mongoose")

const db = mongoose.connect("mongodb://127.0.0.1:27017/portfolioData").then(() => {
    console.log("connected");
}).catch((e) => {
    console.log("dataConnection error " + e);
})

module.exports = db;