import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  it('renders the button with the correct text', () => {
    render(<Button>Submit</Button>);
    const button = screen.getByRole('button', { name: /submit/i });

    expect(button).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when the button is disabled', async () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Submit
      </Button>
    );

    const button = screen.getByRole('button', { name: /submit/i });
    await userEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
