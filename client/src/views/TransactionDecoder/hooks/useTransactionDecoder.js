import { useState, useCallback } from 'react';

const useTransactionDecoder = () => {
  const [decodedData, setDecodedData] = useState({});

  const handleDecodedData = useCallback((data) => {
    setDecodedData(data);
  }, []);

  return {
    decodedData,
    handleDecodedData,
  };
};

export default useTransactionDecoder;
