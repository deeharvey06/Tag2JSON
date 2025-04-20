
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const transactionRouter = require('./routes/transactionRoutes');

const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/transaction', transactionRouter);

app.get('/api/hello', (_req, res) => {
  res.status(200).json({ message: 'Hello from server!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;