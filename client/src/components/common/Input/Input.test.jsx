import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input Component', () => {
  it('renders with a label if provided', () => {
    render(<Input
      label='Name' name='name'
      />
    );

    const label = screen.getByText(/name/i);
    const input = screen.getByLabelText(/name/i);

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('updates value on user input', async () => {
    render(<Input
      placeholder='Enter text'
      />
    );

    const input = screen.getByPlaceholderText(/enter text/i);

    await userEvent.type(input, 'Hello');
    expect(input).toHaveValue('Hello');
  });

  it('calls the onChange handler when value changes', async () => {
    const handleChange = jest.fn();
    render(<Input
      placeholder='Enter text' onChange={handleChange}
      />
    );

    const input = screen.getByPlaceholderText(/enter text/i);

    await userEvent.type(input, 'Hello');
    expect(handleChange).toHaveBeenCalledTimes(5); // Called once for each character typed
  });
});
