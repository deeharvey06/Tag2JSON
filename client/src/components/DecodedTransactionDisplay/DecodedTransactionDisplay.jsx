import styles from './styles.module.scss';

const DecodedTransactionDisplay = ({ decodedData }) => (
  <div className={styles.decodedTransactionDisplay}>
    <h2 className={styles.sectionTitle}>Decoded Transaction</h2>
    <div className={styles.displayContent}>
    {decodedData.version ? (
        <pre>{JSON.stringify(decodedData, null, 2)}</pre>
      ) : (
        <p>No transaction data available.</p>
      )}
    </div>
  </div>
);


export default DecodedTransactionDisplay;
