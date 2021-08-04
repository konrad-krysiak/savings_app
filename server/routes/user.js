import express from 'express';

//setup router
const router = express.Router();

const getActions = require('../controllers/posts.js');
//platnosci przychodzace
//pobieranie wszystkich platnosci przychodzacych
router.get('/posts', getActions.getAllPayments);

//pobieranie jednej konkretnej platnosci przychodzacej
router.get('/posts/{id}', getActions.getPayment);

//zapisywanie płatnosci przychodzacej
router.post('/posts', getActions.savePayment);

//edytowanie platnosci przychodzacej
router.put('/posts', getActions.editPayment);

//usuwanie platnosci przychodzacej
router.delete('/posts', getActions.deletePayment);

export default router;
