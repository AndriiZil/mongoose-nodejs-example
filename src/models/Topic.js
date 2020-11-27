const { model, Schema, Types } = require('mongoose');

const TopicSchema = new Schema({
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
    article_id: {
        type: Types.ObjectId,
        ref: 'Article'
    }
});

module.exports = model('Topic', TopicSchema);
