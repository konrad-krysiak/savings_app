import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

import ModelPayment from '../db/models/payment_model.js';
import ModelPaycheck from '../db/models/paycheck_model.js';
import ModelPiggyBank from '../db/models/piggyBank_model.js';

export const getPosts = (req, res) => {
  //call back function req-> request , res->respond
  res.send('server dziala');
};

//funkcje PAYMENT

export const getAllPayments = async (req, res) => {
  try {
    const modelPayment = await ModelPayment.find();

    res.status(200).json(modelPayment); //
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getPayment = async (req, res) => {
  const { id } = req.params.idPayment;

  try {
    const payment = await ModelPayment.findById(id);

    res.status(200).json(payment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPayment = async (req, res) => {
  const { idPayment, paymentCash, paymentAccount, date } = req.body;

  const newPayment = new ModelPayment({ idPayment, paymentCash, paymentAccount, date });

  try {
    await newPayment.save();

    res.status(201).json(newPayment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const editPayment = async (req, res) => {
  const { id } = req.params.idPayment;
  const { paymentCash, paymentAccount, date } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No payment with id: ${id}');

  const editedPayment = { _id: id, paymentCash, paymentAccount, date };

  await ModelPayment.findByIdAndUpdate(id, editedPayment, { new: true });

  res.json(editedPayment);
};

export const deletePayment = async (req, res) => {
  const { id } = req.params.idPayment;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No payment with id: ${id}');

  await ModelPayment.findByIdAndRemove(id);

  res.json({ message: 'Payment deleted successfully' });
};

//PAYCHECK

export const getAllPaychecks = async (req, res) => {
  try {
    const modelPaycheck = await ModelPaycheck.find();

    res.status(200).json(modelPaycheck);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getPaycheck = async (req, res) => {
  const { id } = req.params.idPaycheck;

  try {
    const paycheck = await ModelPaycheck.findById(id);

    res.status(200).json(paycheck);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPaycheck = async (req, res) => {
  const { paycheckCash, paycheckAccount, date } = req.body;

  const newPaycheck = new ModelPayment({ paycheckCash, paycheckAccount, date });

  try {
    await newPaycheck.save();

    res.status(201).json(newPaycheck);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const editPaycheck = async (req, res) => {
  const { id } = req.params.idPaycheck;
  const { paycheckCash, paycheckAccount, date } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No paycheck with id: ${id}');

  const editedPaycheck = { _id: id, paycheckCash, paycheckAccount, date };

  await ModelPaycheck.findByIdAndUpdate(id, editedPaycheck, { new: true });

  res.json(editedPaycheck);
};

export const deletePaycheck = async (req, res) => {
  const { id } = req.params.idPaycheck;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No paycheck with id: ${id}');

  await ModelPaycheck.findByIdAndRemove(id);

  res.json({ message: 'Paycheck deleted successfully' });
};

//PIGGYBANK

export const getAllPiggiesBanks = async (req, res) => {
  try {
    const modelPiggyBank = await ModelPiggyBank.find();

    res.status(200).json(modelPiggyBank);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPiggyBank = async (req, res) => {
  const { id } = req.params.idPiggy;

  try {
    const piggyBank = await ModelPiggyBank.findById(id);

    res.status(200).json(piggyBank);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPiggyBank = async (req, res) => {
  const { namePiggy, description, amount, dateOfEnd, dateOfBegin } = req.body;

  const newPiggyBank = new ModelPiggyBank({
    namePiggy,
    description,
    amount,
    dateOfEnd,
    dateOfBegin,
  });

  try {
    await newPiggyBank.save();

    res.status(201).json(newPiggyBank);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const editPiggyBank = async (req, res) => {
  const { id } = req.params.idPiggy;
  const { namePiggy, description, amount, dateOfEnd, dateOfBegin } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No PiggyBank with id: ${id}');

  const editedPiggyBank = { _id: id, namePiggy, description, amount, dateOfEnd, dateOfBegin };

  await ModelPaycheck.findByIdAndUpdate(id, editedPiggyBank, { new: true });

  res.json(editedPiggyBank);
};

export const deletePiggyBank = async (req, res) => {
  const { id } = req.params.idPiggy;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No PiggyBank with id: ${id}');

  await ModelPaycheck.findByIdAndRemove(id);

  res.json({ message: 'PiggyBank deleted successfully' });
};

export default router;
