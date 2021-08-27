import mongoose from 'mongoose';

//dane użytkownika
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

userSchema.set('toJSON',{
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret){
    delete ret._id;
    delete ret.hash;
  }
});


//aktualna wartosc pieniedzy
const accountSchema = mongoose.Schema({
  cash: { type: Int16Array, required: true },
  moneyOnTheAccount: { type: Int16Array, required: true },
});

accountSchema.set('toJSON',{
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret){
    delete ret._id;
    delete ret.hash;
  }
});

//wpłata
const paymentSchema = mongoose.Schema({
  idPayment: {type: Int16Array, required: true},
  paymantCash: { type: Int16Array, required: false },
  paymentAccount: { type: Int16Array, required: false },
  date: {type: date, required: true}
});

paymentSchema.set('toJSON',{
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret){
    delete ret._id;
    delete ret.hash;
  }
});

//wypłata
const paycheckSchema = mongoose.Schema({
  idPaycheck: {type: Int16Array, required: true},
  paycheckCash: { type: Int16Array, required: false },
  paycheckAccount: { type: Int16Array, required: false },
  date: {type: date, required: true}
});

paychecktSchema.set('toJSON',{
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret){
    delete ret._id;
    delete ret.hash;
  }
});

const piggyBankSchema = mongoose.Schema({
  idPiggy: {type: Int16Array, required: true},
  namePiggy: {type: String, required: false},
  description: {type: String, required: false},
  amount: {type: Int16Array, required: false},
  dateOfEnd: {type: date, required: false},
  dateOfBegin: {type: date, required: true}
})

piggyBankSchema.set('toJSON',{
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret){
    delete ret._id;
    delete ret.hash;
  }
});

//export 

var ModelUser = mongoose.model('User', userSchema);
export default ModelUser;
var ModelAccount = mongoose.model('Account', accountSchema);
export default ModelAccount;
var ModelPayment = mongoose.model('Payment', paymentSchema);
export default ModelPayment;
var ModelPaycheck = mongoose.model('Paycheck', paycheckSchema);
export default ModelPaycheck;
var ModelPiggyBank = mongoose.model('PiggyBank', piggyBankSchema);
export default ModelPiggyBank;


