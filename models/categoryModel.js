// models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subcategories: [{
        name: {
            type: String,
            required: true
        }
    }]
})
let categoryModel = mongoose.model('Cate', categorySchema);
module.exports = categoryModel;