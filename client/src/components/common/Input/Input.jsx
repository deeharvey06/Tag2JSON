import styles from './styles.module.scss';

const Input = ({ className = '', label = '', name, ...props }) => (
  <div className={styles.inputContainer}>
    {label && (
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
    )}
    <input
      id={name}
      className={`${styles.input} ${className}`}
      name={name}
      {...props}
    />
  </div>
);

export default Input;
