import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    email: String,
    transactionId: String,
    price: Number,
    date: Date,
    category:String,
});

const PaymentModel =mongoose.models.payments || mongoose.model('payments', paymentSchema);
export default PaymentModel ;