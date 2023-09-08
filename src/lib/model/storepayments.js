import mongoose from 'mongoose';

const storepaymentsModel = new mongoose.Schema({
    email: String,
    transactionId: String,
    price: Number,
    date: Date,
});

const StorePayments =mongoose.models.storepayments || mongoose.model('storepayments', storepaymentsModel);
export default StorePayments ;