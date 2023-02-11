const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trimmed: true,
        },
        email: { 
            type: String,
            required: true,
            unique: true,
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        },
        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
        friends: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }

    },
   {
    toJSON: {
        virtuals: true,
    },
    id: false,
   }
);

postSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const Post = modal('post', postSchema);

module.exports = Post;