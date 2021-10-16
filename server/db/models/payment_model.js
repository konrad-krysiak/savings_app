import mongoose from 'mongoose';
//wpłata
const paymentSchema = mongoose.Schema({
  paymantCash: { type: Number, required: true },
  paymentAccount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

paymentSchema.set('toJSON', {
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.hash;
  },
});

const ModelPayment = mongoose.model('Payment', paymentSchema);
export default ModelPayment;
