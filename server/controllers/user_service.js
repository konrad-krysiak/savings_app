const db = require('../../db/models/savings_app_db.js');
const _payment = db.payment;

export const getPosts = (req, res) => {
  //call back function req-> request , res->respond
  res.send('server dziala');
};

//funkcje

module.exports = {
  getAllPayments,
  getPayment,
  savePayment,
  editPayment,
  delete: _deletePayment,
};

async function getAllPayments() {
  return _payment.getAll();
}

async function getPayment(id) {
  return _payment.getPaymentById(id);
}

//create payment
async function savePayment(PaymentParam) {
  const new_payment = new Payment(PaymentParam);
  await new_payment.save();
}

async function editPayment(id, PaymentParam) {
  const to_update_payment = await Payment.findById(id);

  if (!to_update_payment) throw 'Payment not found';

  //copy PaymentParam to to_update_payment
  Object.assign(to_update_payment, PaymentParam);

  await to_update_payment.save();
}

async function _deletePayment(id) {
  await payment.findByIdAndRemove(id);
}
