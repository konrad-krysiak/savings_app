import mongoose from 'mongoose';
//aktualna wartosc pieniedzy
const accountSchema = mongoose.Schema({
  cash: { type: Number, required: true },
  moneyOnTheAccount: { type: Number, required: true },
});

accountSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.hash;
  },
});

const ModelAccount = mongoose.model('Account', accountSchema);
export default ModelAccount;
