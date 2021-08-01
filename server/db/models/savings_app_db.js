import mongoose from 'mongoose';

//dane użytkownika
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

//aktualna wartosc pieniedzy
const accountSchema = mongoose.Schema({
  cash: { type: Int16Array, required: true },
  moneyOnTheAccount: { type: Int16Array, required: true },
});

//wpłata
const paymentSchema = mongoose.Schema({
  paymantCash: { type: Int16Array, required: false },
  paymentAccount: { type: Int16Array, required: false },
});

//wypłata
const paycheckmentSchema = mongoose.Schema({
  paycheckmantCash: { type: Int16Array, required: false },
  paycheckmentAccount: { type: Int16Array, required: false },
});

export default mongoose.model('User', userSchema);
export default mongoose.model('Account', accountSchema);
export default mongoose.model('Payment', paymentSchema);
export default mongoose.model('Paycheck', paycheckSchema);

