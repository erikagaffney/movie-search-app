import { render, screen, within } from '@testing-library/react';
import Header from './Header';

test('renders the movie search header', async () => {
  // Arrange
  render(<Header resetApp={jest.fn()} />);

  // Act
  const banner = screen.getByRole('banner');
  const header = within(banner).getByText('Movie Search');

  // Assert
  expect(banner).toBeInTheDocument();
  expect(header).toBeInTheDocument();
});

test('renders the logo', () => {
  // Arrange
  render(<Header resetApp={jest.fn()} />);

  // Act
  const logo = screen.getByRole('presentation');

  // Assert
  expect(logo).toBeInTheDocument();
});
