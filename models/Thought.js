const { Schema, model } = require('mongoose');
const reactionsSchema = require('./reactionsSchema');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function (time) {
                return new Date(time).toLocaleDateString()
            }
        },
        username: {
            type: String,
            required: true
        },
        reactions: [
            reactionsSchema
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
)

thoughtSchema.virtual("reactionCount").get(function () {
    const rctnCount = this.reactions.length;
    return rctnCount;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought