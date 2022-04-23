const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [
            true,
            'Item name is required'
        ]
    },
    price: { 
        type: Number,
        required: [
            true,
            'Item price is required'
        ]
    },
    description: { 
        type: String,
        required: [
            true,
            'Item description is required'
        ]
    },
    category: { 
        type: String,
        required: [
            true,
            'Item category is required'
        ]
    }
}, { timestamps: true });
module.exports.Item = mongoose.model('Item', ItemSchema);
