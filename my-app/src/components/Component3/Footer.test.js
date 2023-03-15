import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';
describe('Footer', () => {
    it('should render the Footer component', () => {
      render(<Footer />);
      const footerComponent = screen.getByTestId('footer');
      expect(footerComponent).toBeInTheDocument();
    });
  });
  