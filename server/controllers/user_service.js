import express from 'express';
import mongoose, { Model } from 'mongoose';
const router = express.Router();

import ModelUser from '../models/savings_app_db.js';
import ModelAccount from '../models/savings_app_db.js';
import ModelPayment from '../models/savings_app_db.js';
import ModelPaycheck from '../models/savings_app_db.js';
import ModelPiggyBank from '../models/savings_app_db.js';

/*
const config = require('config.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../../db/models/savings_app_db.js');
const _payment = db.payment;
*/

export const getPosts = (req, res) => {
  //call back function req-> request , res->respond
  res.send('server dziala');
};

//funkcje

export const getAllPayments = async (req, res) => {
  try {
    const modelPayment = await ModelPayment.find();

    res.status(200).json(modelPayment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getPayment = async (req, res) => {
  const { id } = req.params;

  try {
    const payment = await ModelPayment.findById(id);

    res.status(200).json(payment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//create payment
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
  const { id } = req.params;
  const { idPayment, paymentCash, paymentAccount, date } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No payment with id: ${id}');

  const editedPayment = { _id: id, paymentCash, paymentAccount, date };

  await ModelAccount.findByIdAndUpdate(id, editedPayment, { new: true });

  res.json(editedPayment);
};

export const deletePayment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No payment with id: ${id}');

  await ModelAccount.findByIdAndRemove(id);

  res.json({ message: 'Payment deleted successfully' });
};

export default router;
