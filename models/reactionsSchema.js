const { Schema, Types } = require('mongoose');

const reactionsSchema = new Schema(
    {
        reactionsId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function (time) {
                return new Date(time).toLocaleDateString()
            }
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
        _id: false,
    }
)



module.exports = reactionsSchema;