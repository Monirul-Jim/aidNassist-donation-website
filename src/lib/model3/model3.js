import mongoose from 'mongoose';

const reserveSchema = new mongoose.Schema({
    email: String,
    transactionId: String,
    price: Number,
    date: Date,
});

const PostApi =mongoose.models.reservemoney || mongoose.model('reservemoney', reserveSchema);
export default PostApi ;