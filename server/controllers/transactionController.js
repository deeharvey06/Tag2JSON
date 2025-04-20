const processTransaction = require('../helpers/processTransaction');

exports.processTransaction = (req, res, next) => {
  try {
    const { structuredString } = req.body;

    if (!structuredString || typeof structuredString !== "string") {
      return res.status(400).json({ error: "Invalid input. 'structuredString' must be a non-empty string." });
    }

    const result = processTransaction(structuredString);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error processing transaction:', error.message);
    res.status(400).json({ error: error.message });
  }
};