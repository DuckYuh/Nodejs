const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/paymentController');


router.post('/post', PaymentController.createPayment);
router.get('/get', PaymentController.getPayments);
router.get('/get/:id', PaymentController.getPaymentById);
router.put('/put/:id', PaymentController.updatePayment);
router.delete('/delete/:id', PaymentController.deletePayment);

module.exports = router;
