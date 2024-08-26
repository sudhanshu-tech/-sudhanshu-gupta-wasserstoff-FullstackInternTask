const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    sector: String,
    topic: String   
})
module.exports = mongoose.model('data', productSchema);
