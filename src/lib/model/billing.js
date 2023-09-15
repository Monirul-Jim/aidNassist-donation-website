import mongoose from 'mongoose';

const sslBilling = new mongoose.Schema({
    email: String,
    tran_id: String,
    price: Number,
    status: String,
});

const sslBill = mongoose.models.billing || mongoose.model('billing', sslBilling);
export default sslBill;

