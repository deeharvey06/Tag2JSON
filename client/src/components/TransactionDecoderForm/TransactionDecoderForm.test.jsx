import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TransactionDecoderForm from './TransactionDecoderForm';

describe('TransactionDecoderForm Component', () => {
  it('renders the form title', () => {
    render(<TransactionDecoderForm handleDecodedData={jest.fn()} />);
    const title = screen.getByText(/transaction decoder/i);
    expect(title).toBeInTheDocument();
  });

  it('renders all input fields', () => {
    render(<TransactionDecoderForm handleDecodedData={jest.fn()} />);
    const networkInput = screen.getByRole('textbox', { name: /network/i });
    const amountInput = screen.getByRole('textbox', { name: /amount/i });
    const merchantInput = screen.getByRole('textbox', { name: /merchant/i });

    expect(networkInput).toBeInTheDocument();
    expect(amountInput).toBeInTheDocument();
    expect(merchantInput).toBeInTheDocument();
  });

  it('allows the user to type into input fields', async () => {
    render(<TransactionDecoderForm handleDecodedData={jest.fn()} />);
    const networkInput = screen.getByRole('textbox', { name: /network/i });

    await userEvent.type(networkInput, 'Ethereum');
    expect(networkInput).toHaveValue('Ethereum');
  });

  it('calls handleDecodedData when the form is submitted', async () => {
    const handleDecodedData = jest.fn();
    render(<TransactionDecoderForm handleDecodedData={handleDecodedData} />);

    const networkInput = screen.getByRole('textbox', { name: /network/i });
    const submitButton = screen.getByRole('button', { name: /submit/i });

    await userEvent.type(networkInput, 'Ethereum');
    await userEvent.click(submitButton);

    expect(handleDecodedData).toHaveBeenCalledWith({
      network: 'Ethereum',
      amount: '',
      merchant: '',
    });
  });
});