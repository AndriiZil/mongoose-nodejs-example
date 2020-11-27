const { model, Schema, Types } = require('mongoose');

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        minLength: 3,
        maxLength: 25
    },
    description: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        minLength: 3,
        maxLength: 25
    },
    addTime: {
        type: Date,
        default: Date.now()
    },
    user_id: {
        type: Types.ObjectId,
        ref: 'User'
    },
    category_id: {
        type: Types.ObjectId,
        ref: 'Category'
    }
});

module.exports = model('Article', ArticleSchema);
