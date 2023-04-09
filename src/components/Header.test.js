import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the movie search title', () => {
  const element = render(<Header />);
  expect(element.container).toHaveTextContent(/Movie Search/i);
});

test('renders the logo', () => {
  render(<Header />);
  const logo = screen.getByRole(/presentation/i);
  expect(logo).toBeInTheDocument();
});
