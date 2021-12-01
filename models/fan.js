const mongoose = require("mongoose");
const fanSchema = mongoose.Schema({
    fan_type: {
        type: String,
        //minLength: 2,
       // maxLength: 12
    },
    color: String,
    cost: {
        type: Number,
        //min: 2,
        //max: 6
    }
});

module.exports = mongoose.model("fan", fanSchema);