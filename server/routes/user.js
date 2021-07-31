import express from 'express';

<<<<<<< HEAD
//setup router
const router = express.Router();

import {
  signIn,
  signUp,
  getAllPayments,
  getPayment,
  createPayment,
  editPayment,
  deletePayment,
} from '../controllers/user_service.js';

//import * as getActions from '../controllers/user_service.js';
//platnosci przychodzace
//pobieranie wszystkich platnosci przychodzacych

router.post('/signin', signIn);

router.post('/signup', signUp);

router.get('/', getAllPayments);

//pobieranie jednej konkretnej platnosci przychodzacej
router.get('/{id}', getPayment);

//zapisywanie płatnosci przychodzacej
router.post('/', createPayment);

//edytowanie platnosci przychodzacej
router.put('/{id}', editPayment);

//usuwanie platnosci przychodzacej
router.delete('/{id}', deletePayment);

export default router;
=======
const router = express.Router();

router.get('/', (req, res) => res.send("dziala"));


export default router;
>>>>>>> Login system in progress
