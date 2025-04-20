import TransactionDecoderLayout from '../../layout/TransactionDecoderLayout/';

import TransactionDecoderForm from '../../components/TransactionDecoderForm/';
import DecodedTransactionDisplay from '../../components/DecodedTransactionDisplay';

import useTransactionDecoder from './hooks/useTransactionDecoder';

import styles from './styles.module.scss';

const TransactionDecoder = () => {
  const { decodedData, handleDecodedData } = useTransactionDecoder();

  return (
    <div className={styles.transactionDecoder}>
      <TransactionDecoderLayout>
        <TransactionDecoderForm handleDecodedData={handleDecodedData} />
        <DecodedTransactionDisplay decodedData={decodedData} />
      </TransactionDecoderLayout>
    </div>
  );
};

export default TransactionDecoder;
