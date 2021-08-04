export const getPosts = (req, res) => {
  //call back function req-> request , res->respond
  res.send('server dziala');
};

//funkcje

const db = require('../../db/models/savings_app_db.js');
const _payment = db.payment;

module.exports = {
  getAllPayments,
  getPayment,
  savePayment,
  editPayment,
  deletePayment,
};

async function getAllPayments() {
  return await _payment.getAll();
}

async function getPayment() {
  return await _payment.getPaymentById(id);
}
