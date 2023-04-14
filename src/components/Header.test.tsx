import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  const logo = screen.getByAltText('go to main page');

  // Assert
  expect(logo).toBeInTheDocument();
});

test('click logo should call reset app', async () => {
  // Arrange
  const mock = jest.fn();
  render(<Header resetApp={mock} />);

  // Act
  const logo = screen.getByAltText('go to main page');
  await userEvent.click(logo);

  // Assert
  expect(mock).toHaveBeenCalledTimes(1);
});
