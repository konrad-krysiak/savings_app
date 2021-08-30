import mongoose from 'mongoose';

const piggyBankSchema = mongoose.Schema({
  namePiggy: { type: String, required: false },
  description: { type: String, required: false },
  amount: { type: Number, required: false },
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
