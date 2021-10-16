import mongoose from 'mongoose';

const piggyBankSchema = mongoose.Schema({
  namePiggy: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  dateOfBegin: { type: Date, default: Date.now },
  dateOfEnd: { type: Date, required: true },
});

piggyBankSchema.set('toJSON', {
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.hash;
  },
});

const ModelPiggyBank = mongoose.model('PiggyBank', piggyBankSchema);
export default ModelPiggyBank;
