import Input from '../../../common/Input';
import Button from '../../../common/Button';

import useForm from './hooks/useForm';

import styles from './styles.module.scss';

const Form = ({ handleDecodedData }) => {
  const {
    network,
    amount,
    merchant,
    isButtonDisabled,
    handleSubmit,
    handleChange,
  } = useForm(handleDecodedData);

  return (
    <form className={styles.Form}>
      <Input
        name='network'
        label='Network'
        value={network}
        type='text'
        required
        onChange={handleChange}
      />

      <Input
        name='amount'
        label='Amount'
        value={amount}
        type='number'
        onChange={handleChange}
      />

      <Input
        name='merchant'
        label='Merchant'
        value={merchant}
        type='text'
        onChange={handleChange}
      />

      <Button disabled={isButtonDisabled} onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
