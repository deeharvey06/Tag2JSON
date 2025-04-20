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

  const validTags = ["1", "2", "3"];
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
      case "1":
        result.network = value;
        if (value === "VISA") {
          result.transaction_descriptor = result.amount.padStart(8, "0");
        } else {
          result.transaction_descriptor = value.slice(0, 2).toUpperCase() + "FFFF";
        }
        break;

      case "2":
        result.amount = value.replace(".", "");
        result.amount = parseInt(result.amount, 10).toString();

        if (result.transaction_descriptor === '00000000' ) {
          result.transaction_descriptor = result.amount.padStart(8, "0");
        }
        break;

      case "3":
        result.merchant = value.slice(0, 10);
        break;

      default:
        // This case will never be reached due to the validTags check
        break;
    }

    i += 3 + length;
  }

  return result;
};

module.exports = processTransaction;