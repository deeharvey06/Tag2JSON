import styles from './styles.module.scss';

const TransactionDecoderLayout = ({ children }) => {
  return (
    <div className={styles.transactionDecoderLayout}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default TransactionDecoderLayout;
