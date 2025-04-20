const { v4: uuidv4 } = require('uuid');

const processTransaction = (transaction) => {
  const result = {
    version: "0.1",
    transaction_id: uuidv4(),
    amount: "",
    network: "",
    transaction_descriptor: "",
    merchant: "",
    raw_message: transaction,
  };

  const validTags = ["1", "2", "3"]; // Define valid tags
  let i = 0;

  while (i < transaction.length) {
    const tag = transaction[i];
    const length = parseInt(transaction.slice(i + 1, i + 3), 10);

    if (isNaN(length) || length <= 0) {
      throw new Error(`Invalid length for tag ${tag} at position ${i}`);
    }

    const value = transaction.slice(i + 3, i + 3 + length);

    if (!validTags.includes(tag)) {
      throw new Error(`Unknown tag '${tag}' encountered at position ${i}`);
    }

    switch (tag) {
      case "1": // Payment network
        result.network = value;
        if (value === "VISA") {
          result.transaction_descriptor = result.amount.padStart(8, "0");
        } else {
          result.transaction_descriptor = value.slice(0, 2).toUpperCase() + "FFFF";
        }
        break;

      case "2": // Transaction amount
        result.amount = value.replace(".", ""); // Remove the decimal point
        result.amount = parseInt(result.amount, 10).toString(); // Remove leading zeros

        if (result.transaction_descriptor === '00000000' ) {
          result.transaction_descriptor = result.amount.padStart(8, "0");
        }
        break;

      case "3": // Merchant
        result.merchant = value.slice(0, 10); // Truncate to 10 characters
        break;

      default:
        // This case will never be reached due to the validTags check
        break;
    }

    i += 3 + length; // Move to the next tag
  }

  return result;
};

module.exports = processTransaction;