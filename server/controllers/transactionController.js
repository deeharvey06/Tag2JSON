const processTransaction = require('../helpers/processTransaction');

exports.processTransaction = (req, res, next) => {
  try {
    const { transaction } = req.body;

    if (!transaction || typeof transaction !== "string") {
      return res.status(400).json({ error: "Invalid input. 'transaction' must be a non-empty string." });
    }

    const result = processTransaction(transaction);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error processing transaction:', error.message);
    res.status(400).json({ error: error.message });
  }
};