import { render, screen } from '@testing-library/react';
import DecodedTransactionDisplay from './DecodedTransactionDisplay';

describe('DecodedTransactionDisplay Component', () => {
  it('displays "No transaction data available" when decodedData is empty', () => {
    render(<DecodedTransactionDisplay decodedData={{}} />);

    const fallbackMessage = screen.getByText(/no transaction data available/i);

    expect(fallbackMessage).toBeInTheDocument();
  });

  it('renders the decoded data when provided', () => {
    const mockData = {
      version: "0.1",
      transaction_id: "3b33d87c-bf15-4852-aef4-cc8523f04c0a",
      amount: "2200",
      network: "VISA",
      transaction_descriptor: "00002200",
      merchant: "BURGERBARN",
      raw_message: "104VISA20522.00310BURGERBARN"
    };

    render(<DecodedTransactionDisplay decodedData={mockData} />);

    const jsonData = screen.getByText(/"version"/i);

    expect(jsonData).toBeInTheDocument();
  });
});