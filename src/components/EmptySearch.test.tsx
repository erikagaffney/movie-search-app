import { render, screen } from '@testing-library/react';
import EmptySearch from './EmptySearch';

test('renders the empty search text', () => {
  // Arrange
  render(<EmptySearch />);

  // Act
  const emptySearchText = screen.getByRole('heading');

  // Assert
  expect(emptySearchText).toHaveTextContent(/Search for a movie to begin/i);
});
