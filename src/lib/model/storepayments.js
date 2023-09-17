import mongoose from 'mongoose';

const storepaymentsModel = new mongoose.Schema({
    email: String,
    tran_id: String,
    price: Number,
    status: String,
});

const StorePayments =mongoose.models.storepayments || mongoose.model('storepayments', storepaymentsModel);
export default StorePayments ;