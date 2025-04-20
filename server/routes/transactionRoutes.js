const express = require('express');

const { processTransaction } = require('../controllers/transactionController');

const router = express.Router();

router.route('/processTransaction').get((req, res) => {
  res.status(200).json({ message: 'Hello from transaction router!' });
})

router.route('/processTransaction').post(processTransaction);

module.exports = router;