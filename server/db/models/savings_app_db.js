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
  idPayment: {type: Int16Array, required: true},
  paymantCash: { type: Int16Array, required: false },
  paymentAccount: { type: Int16Array, required: false },
  date: {type: date, required: true}
});

//wypłata
const paycheckmentSchema = mongoose.Schema({
  idPaycheck: {type: Int16Array, required: true},
  paycheckmantCash: { type: Int16Array, required: false },
  paycheckmentAccount: { type: Int16Array, required: false },
  date: {type: date, required: true}
});

const piggyBankSchema = mongoose.Schema({
  idPiggy: {type: Int16Array, required: true},
  namePiggy: {type: String, required: false},
  description: {type: String, required: false},
  amount: {type: Int16Array, required: false},
  dateOfEnd: {type: date, required: false},
  dateOfBegin: {type: date, required: true}
})

export default mongoose.model('User', userSchema);
export default mongoose.model('Account', accountSchema);
export default mongoose.model('Payment', paymentSchema);
export default mongoose.model('Paycheck', paycheckSchema);
export default mongoose.model('PiggyBank', piggyBankSchema);

