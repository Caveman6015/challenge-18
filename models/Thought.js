const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        userName: {
            type: String,
            required: true
        },

        reactions: [reactionSchema],

        createdAt: {
            type: Date,
            Default: Date.now(),
        }
    },
    {
        toJSON: {
            getters:true,
            virtuals: true,
        },
        id:false,
    }
);

postSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

const Post = modal('post', postSchema);

module.exports = thoughtSchema