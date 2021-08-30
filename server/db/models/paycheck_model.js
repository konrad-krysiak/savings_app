import mongoose from 'mongoose';
//wypłata
const paycheckSchema = mongoose.Schema({
  paycheckCash: { type: Number, required: false },
  paycheckAccount: { type: Number, required: false },
  date: { type: Date, default: Date.now },
});

paycheckSchema.set('toJSON', {
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.hash;
  },
});

const ModelPaycheck = mongoose.model('Paycheck', paycheckSchema);
export default ModelPaycheck;
