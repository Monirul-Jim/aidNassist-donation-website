import mongoose from 'mongoose';

const sll = new mongoose.Schema({
    // email: String,
    // transactionId: String,
    // price: Number,
    // date: Date,
    title: String,
    description: String,
    category: String,
    donate: Array,
    image: String
});

const sslCommerzMoney = mongoose.models.sslcommerz || mongoose.model('sslcommerz', sll);
export default sslCommerzMoney;