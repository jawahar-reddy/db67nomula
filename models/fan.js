const mongoose = require("mongoose") 
const fanSchema = mongoose.Schema({ 
fan_type: String, 
color: String, 
cost: Number 
}) 
 
module.exports = mongoose.model("fan",fanSchema) 