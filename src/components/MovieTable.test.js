import { render, screen } from '@testing-library/react';
import MovieTable from './MovieTable';

function renderComponent() {
  const movies = [
    { imdbID: 'sample_id', Year: '2014', Title: 'When Harry Met Sally' },
    { imdbID: 'sample_id2', Year: '2020', Title: 'Title of Other Movie' }
  ];
  render(<MovieTable movies={movies} />);

  return movies;
}

test('should render a count of the results based on the movies', () => {
  // Arrange
  const movies = [];
  render(<MovieTable movies={movies} />);

  //Act
  const heading = screen.getByRole('heading');

  // Assert
  expect(heading).toHaveTextContent('0 Results');
});

test('should render a table with 2 rows for each movie', () => {
  // Arrange
  renderComponent();

  //Act
  const heading = screen.getByRole('heading');
  const table = screen.getByRole('table');
  const rows = screen.getAllByRole('row');

  // Assert
  expect(heading).toHaveTextContent('2 Results');
  expect(table).toBeInTheDocument();
  expect(rows.length).toBe(4);
});

test.only('should render the title, year, and a button to toggle the details for each movie', () => {
  // Arrange
  const movies = renderComponent();

  //Act
  for (let { Title, Year } of movies) {
    const titleCell = screen.getByRole('cell', {
      name: `${Title} Released In: ${Year}`
    });

    // Assert
    expect(titleCell).toBeInTheDocument();
  }
});
