import { render, screen } from '@testing-library/react';
import MovieDetail from './MovieDetail';
import API from '../../api/MoviesAPI';

jest.mock('../../api/MoviesAPI');

beforeEach(() => jest.clearAllMocks());

test('should render an alert if fetch returns a 200 with an error', async () => {
  // Arrange
  (API.getMovieDetails as jest.Mock).mockResolvedValue({ Error: 'I failed!' });

  // Act
  render(<MovieDetail imdbID={'sample_id'} />);
  const alert = await screen.findByRole('alert');
  expect(alert).toBeInTheDocument();
  expect(alert).toHaveTextContent('Unable to load movie details.');
});

test('should render an alert if fetch errors out', async () => {
  // Arrange
  (API.getMovieDetails as jest.Mock).mockRejectedValue(new Error());

  // Act
  render(<MovieDetail imdbID={'sample_id'} />);
  const alert = await screen.findByRole('alert');

  // Assert
  expect(alert).toBeInTheDocument();
  expect(alert).toHaveTextContent('Unable to load movie details.');
});

test('should render a table of details & a plot', async () => {
  // Arrange
  const movie = {
    imdbID: 'sample_id2',
    Rated: 'PG-13',
    Language: 'English',
    Plot: 'Once upon a time a girl lived in a far away land.'
  };
  (API.getMovieDetails as jest.Mock).mockResolvedValue(movie);
  render(<MovieDetail imdbID={movie.imdbID} />);

  // Act
  const rating = await screen.findByRole('cell', { name: movie.Rated });
  const language = await screen.findByRole('cell', { name: movie.Language });
  const plot = await screen.findByText(movie.Plot);

  // Assert
  expect(rating).toBeInTheDocument();
  expect(language).toBeInTheDocument();
  expect(plot).toBeInTheDocument();
});

test('should render default values for movie details that are n/a', async () => {
  const movie = {
    imdbID: 'sample_id',
    Rated: 'n/a',
    Language: 'N/A',
    Plot: 'N/a',
    Ratings: [],
    Genre: ''
  };
  (API.getMovieDetails as jest.Mock).mockResolvedValue(movie);
  render(<MovieDetail imdbID={movie.imdbID} />);

  // Act
  const rating = await screen.findByRole('cell', {
    name: 'No rating available'
  });
  const language = await screen.findByRole('cell', {
    name: 'No language available'
  });
  const plot = await screen.findByText('No plot available');

  // Assert
  expect(rating).toBeInTheDocument();
  expect(language).toBeInTheDocument();
  expect(plot).toBeInTheDocument();
});

test('should render default values for movie details that are empty strings', async () => {
  const movie = {
    imdbID: 'sample_id',
    Rated: '',
    Language: '',
    Plot: '',
    Ratings: [],
    Genre: ''
  };
  (API.getMovieDetails as jest.Mock).mockResolvedValue(movie);
  render(<MovieDetail imdbID={movie.imdbID} />);

  // Act
  const rating = await screen.findByRole('cell', {
    name: 'No rating available'
  });
  const language = await screen.findByRole('cell', {
    name: 'No language available'
  });
  const plot = await screen.findByText('No plot available');

  // Assert
  expect(rating).toBeInTheDocument();
  expect(language).toBeInTheDocument();
  expect(plot).toBeInTheDocument();
});
