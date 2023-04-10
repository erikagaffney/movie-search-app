import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the movie search header', async () => {
  // Arrange
  render(<Header />);

  // Act
  const banner = screen.getByRole('banner');
  const header = banner?.querySelector('span');

  // Assert
  expect(banner).toBeInTheDocument();
  expect(header).toHaveTextContent(/Movie Search/i);
});

test('renders the logo', () => {
  // Arrange
  render(<Header />);

  // Act
  const logo = screen.getByRole('presentation');

  // Assert
  expect(logo).toBeInTheDocument();
});
