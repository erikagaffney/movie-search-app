import { render, screen } from '@testing-library/react';
import MovieRatings from './MovieRatings';

test('should render the ratings on the screen for each source', () => {
  // Arrange
  const ratings = [
    {
      Source: 'Internet Movie Database',
      Value: '6.6/10'
    },
    {
      Source: 'Rotten Tomatoes',
      Value: '85%'
    },
    {
      Source: 'Metacritic',
      Value: '63/100'
    }
  ];
  render(<MovieRatings ratings={ratings} />);

  //Act
  const list = screen.getByRole('list');
  const [IMDBRating, rottenTomatoesRating, metacriticRating] =
    screen.getAllByRole('img');

  // Assert
  expect(list).toBeInTheDocument();
  expect(list.children).toHaveLength(3);
  ratings.forEach((rating) =>
    expect(screen.getByText(rating.Source)).toBeInTheDocument()
  );
  expect(IMDBRating.getAttribute('aria-label')).toBe('3.5 Stars');
  expect(rottenTomatoesRating.getAttribute('aria-label')).toBe('4.5 Stars');
  expect(metacriticRating.getAttribute('aria-label')).toBe('3 Stars');
});

test('should not render if there are no ratings', () => {
  // Arrange
  const ratings = [];
  render(<MovieRatings ratings={ratings} />);

  //Act
  const noRatingsText = screen.getByText(
    'No critic ratings available for this movie'
  );

  // Assert
  expect(noRatingsText).toBeInTheDocument();
});
