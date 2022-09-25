import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    surname: String,
    ID: String,
    phone: String,
    city: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;