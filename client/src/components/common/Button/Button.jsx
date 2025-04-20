import styles from './styles.module.scss';

const Button = ({ children, className = '', ...props }) => (
  <button className={`${styles.button} ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
