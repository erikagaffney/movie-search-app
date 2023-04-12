import { render, screen } from '@testing-library/react';
import MovieGenre from './MovieGenre';

test('renders the movie genres', async () => {
  // Arrange
  render(<MovieGenre genre={'Comedy, drama'} />);

  // Act
  const genre = screen.getByText('Genre: Comedy \u2022 drama');

  // Assert
  expect(genre).toBeInTheDocument();
});

test('does not render if no genre', async () => {
  // Arrange
  const { container } = render(<MovieGenre genre={'N/a'} />);

  // Assert
  expect(container).toBeEmptyDOMElement();
});
