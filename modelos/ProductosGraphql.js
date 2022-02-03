const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    thumbnail: {type: String, required: false},
    timestamp: {type: Date, default: Date.now}
});

const ProductosGraphql = mongoose.model('ProductosGraphql', schema);

module.exports = ProductosGraphql;