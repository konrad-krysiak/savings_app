import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const router = express.Router()

import ModelUser from '../db/models/user_model.js'
import ModelPayment from '../db/models/payment_model.js'
import ModelPaycheck from '../db/models/paycheck_model.js'
import ModelPiggyBank from '../db/models/piggyBank_model.js'

//test

export const getPosts = (req, res) => {
  //call back function req-> request , res->respond
  res.send('server dziala')
}

//funkcje logowania
const code = 'iksde'

export const signIn = async (req, res) => {
  const { email, password } = req.body

  try {
    const oldUser = await ModelUser.findOne({ email })
    if (!oldUser) return res.status(404).json({ message: "User doesn't exist." })
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)
    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid password.' })
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, code, { expiresIn: '1h' })
    res.status(200).json({ result: oldUser, token })
  } catch (error) {
    res.status(500).json({ message: 'Error in usersController' })
  }
}

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName } = req.body
  console.log(req.body)

  try {
    const oldUser = await ModelUser.findOne({ email })
    if (oldUser) {
      console.log('User already exists!')
      return res.status(400).json({ message: 'User already exists.' })
    }
    const hashedPassword = await bcrypt.hash(password, 12)
    const newUser = await ModelUser.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    })
    const token = jwt.sign({ email, id: newUser._id }, code, { expiresIn: '1h' })
    res.status(200).json({ result: newUser })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong in usersController' })
  }
}

//funkcje PAYMENT

export const getAllPayments = async (req, res) => {
  try {
    const modelPayment = await ModelPayment.find()

    res.status(200).json(modelPayment)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
export const getPayment = async (req, res) => {
  const { id } = req.params

  try {
    const payment = await ModelPayment.findById(id)
    res.status(200).json(payment)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPayment = async (req, res) => {
  const { paymentCash, paymentAccount, date } = req.body

  const newPayment = new ModelPayment({ paymentCash, paymentAccount, date })

  try {
    await newPayment.save()
    res.send(newPayment)
    res.status(201).json(newPayment)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const editPayment = async (req, res) => {
  const { id } = req.params
  const { paymentCash, paymentAccount, date } = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No payment with id: ${id}')

  const editedPayment = { _id: id, paymentCash, paymentAccount, date }

  await ModelPayment.findByIdAndUpdate(id, editedPayment, { new: true })

  res.json(editedPayment)
}

export const deletePayment = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No payment with id: ${id}')

  await ModelPayment.findByIdAndRemove(id)

  res.json({ message: 'Payment deleted successfully' })
}

//PAYCHECK

export const getAllPaychecks = async (req, res) => {
  try {
    const modelPaycheck = await ModelPaycheck.find()

    res.status(200).json(modelPaycheck)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
export const getPaycheck = async (req, res) => {
  const { id } = req.params.idPaycheck

  try {
    const paycheck = await ModelPaycheck.findById(id)

    res.status(200).json(paycheck)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPaycheck = async (req, res) => {
  const { paycheckCash, paycheckAccount, date } = req.body

  const newPaycheck = new ModelPaycheck({ paycheckCash, paycheckAccount, date })

  try {
    await newPaycheck.save()

    res.status(201).json(newPaycheck)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const editPaycheck = async (req, res) => {
  const { id } = req.params.idPaycheck
  const { paycheckCash, paycheckAccount, date } = req.body

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No paycheck with id: ${id}')

  const editedPaycheck = { _id: id, paycheckCash, paycheckAccount, date }

  await ModelPaycheck.findByIdAndUpdate(id, editedPaycheck, { new: true })

  res.json(editedPaycheck)
}

export const deletePaycheck = async (req, res) => {
  const { id } = req.params.idPaycheck

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No paycheck with id: ${id}')

  await ModelPaycheck.findByIdAndRemove(id)

  res.json({ message: 'Paycheck deleted successfully' })
}

//PIGGYBANK

export const getAllPiggiesBanks = async (req, res) => {
  try {
    const modelPiggyBank = await ModelPiggyBank.find()

    res.status(200).json(modelPiggyBank)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getPiggyBank = async (req, res) => {
  const { id } = req.params.idPiggy

  try {
    const piggyBank = await ModelPiggyBank.findById(id)

    res.status(200).json(piggyBank)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPiggyBank = async (req, res) => {
  const { namePiggy, description, amount, dateOfEnd, dateOfBegin } = req.body

  const newPiggyBank = new ModelPiggyBank({
    namePiggy,
    description,
    amount,
    dateOfEnd,
    dateOfBegin,
  })

  try {
    await newPiggyBank.save()

    res.status(201).json(newPiggyBank)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const editPiggyBank = async (req, res) => {
  const { id } = req.params.idPiggy
  const { namePiggy, description, amount, dateOfEnd, dateOfBegin } = req.body

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No PiggyBank with id: ${id}')

  const editedPiggyBank = { _id: id, namePiggy, description, amount, dateOfEnd, dateOfBegin }

  await ModelPaycheck.findByIdAndUpdate(id, editedPiggyBank, { new: true })

  res.json(editedPiggyBank)
}

export const deletePiggyBank = async (req, res) => {
  const { id } = req.params.idPiggy

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No PiggyBank with id: ${id}')

  await ModelPaycheck.findByIdAndRemove(id)

  res.json({ message: 'PiggyBank deleted successfully' })
}

export default router
