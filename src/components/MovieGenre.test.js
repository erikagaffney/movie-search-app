import { render, screen } from '@testing-library/react';
import MovieGenre from './MovieGenre';

test('renders the movie genres', async () => {
  // Arrange
  render(<MovieGenre genre={'Comedy, drama'} />);

  // Act
  const genre = screen.getByText('Genre: Comedy, drama');

  // Assert
  expect(genre).toBeInTheDocument();
});
