import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Login';

describe('Login', () => {
    it('should render the Login component', () => {
      render(<Login />);
      const loginComponent = screen.getByTestId('login-form');
      expect(loginComponent).toBeInTheDocument();
    });
  });

  it('should allow the user to login with valid credentials', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: /submit/i });
  
    fireEvent.change(emailInput, { target: { value: 'testuser@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
  
    const loginMessage = screen.getByTestId('login-message');
    expect(loginMessage).toHaveTextContent('You are now logged in!');
  });
  