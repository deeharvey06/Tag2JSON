import { useState, useCallback } from 'react';

import { processTransaction } from '../../../../../api/processTransaction';
import serializesString from '../../../../../helpers/serializesString';

const initialState = {
  network: '',
  amount: '',
  merchant: '',
};

const useForm = (handleDecodedData) => {
  const [formData, setFormData] = useState(initialState);

  const { network, amount, merchant } = formData;
  const isButtonDisabled = !network || !amount || !merchant;

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    try {
      const structuredString = serializesString(formData);
      const decodedData = await processTransaction(structuredString);

      handleDecodedData(decodedData.data);
      setFormData(initialState);
    } catch (error) {
      console.error('Error processing transaction:', error);
    }
  }, [formData, handleDecodedData]);

  return {
    network,
    amount,
    merchant,
    isButtonDisabled,
    handleSubmit,
    handleChange,
  };
};

export default useForm;
