import express from 'express';

//setup router
const router = express.Router();

import * as getActions from '../controllers/user_service.js';
//platnosci przychodzace
//pobieranie wszystkich platnosci przychodzacych
router.get('/', getActions.getAllPayments);

//pobieranie jednej konkretnej platnosci przychodzacej
router.get('/:id', getActions.getPayment);

//zapisywanie płatnosci przychodzacej
router.post('/', getActions.createPayment);

//edytowanie platnosci przychodzacej
router.put('/:id', getActions.editPayment);

//usuwanie platnosci przychodzacej
router.delete('/:id', getActions.deletePayment);

export default router;
