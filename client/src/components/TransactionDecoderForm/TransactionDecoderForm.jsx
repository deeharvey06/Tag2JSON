import Form from './components/Form';
import styles from './styles.module.scss';

const TransactionDecoderForm = ({ handleDecodedData }) => (
  <div className={styles.transactionDecoderForm}>
    <h2 className={styles.sectionTitle}>Transaction Decoder</h2>
    <Form handleDecodedData={handleDecodedData} />
  </div>
);

export default TransactionDecoderForm;
