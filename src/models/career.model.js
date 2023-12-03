const {Schema,  model } = require("mongoose");

const careerSchema= new Schema({
    name: {
        type: String,
        required: true,
    },
    colorTag: {
        type: String,
        required: true,
    },
    }
);

module.exports = model("Career", careerSchema);