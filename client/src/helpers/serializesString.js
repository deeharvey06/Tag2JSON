const serializesString = ({ network, amount, merchant }) => {
  if (!network || !amount || !merchant) {
    throw new Error("Invalid input: 'amount', 'network', and 'merchant' are required.");
  }
  const formattedAmount = amount.includes(".") ? amount : `${amount}.00`;

  const networkLength = network.length < 10 ? `0${network.length}` : network.length;
  const amountLength = formattedAmount.length < 10 ? `0${formattedAmount.length}` : formattedAmount.length;
  const merchantLength = merchant.length < 10 ? `0${merchant.length}` : merchant.length;

  const serializedNetwork = `1${networkLength}${network.toUpperCase()}`;
  const serializedAmount = `2${amountLength}${formattedAmount}`;
  const serializedMerchant = `3${merchantLength}${merchant.toUpperCase()}`;

  return `${serializedNetwork}${serializedAmount}${serializedMerchant}`;
};

export default serializesString;