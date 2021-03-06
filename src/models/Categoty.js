const { model, Schema, Types } = require('mongoose');

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = model('Category', CategorySchema);
