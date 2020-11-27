const { model, Schema, Types } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        minLength: 3,
        maxLength: 25
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    addresses: [{
        type: Types.ObjectId,
        ref: 'Address'
    }]
});

UserSchema.virtual('fullInfo').get(function () {
    return `${this.name} - ${this.age}`;
});

module.exports = model('User', UserSchema);
