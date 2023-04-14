import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import API from './api/MoviesAPI';

jest.mock('./api/MoviesAPI');

async function fireSearch(search = 'Inception') {
  const input = await screen.findByRole('textbox', {
    name: 'Enter a movie title'
  });
  const button = await screen.findByRole('button', { name: 'search' });
  await userEvent.click(input);
  await userEvent.keyboard(search);
  await userEvent.click(button);
}

beforeEach(() => jest.clearAllMocks());

test('display the empty movie state when there has not been a search executed', () => {
  // Arrange
  render(<App />);

  // Act
  const heading = screen.getByRole('heading');

  // Assert
  expect(heading).toHaveTextContent('Search for a movie to begin');
});

test('should call the API for movies and display the results when a user searches', async () => {
  // Arrange
  render(<App />);
  const mockApi = (API.getMovies as jest.Mock).mockResolvedValue({
    Search: [
      {
        Title: 'Inception',
        Year: '2018',
        imdbID: 'ttyID',
        Poster: '',
        Rating: []
      }
    ],
    totalResults: 1
  });

  // Act
  await fireSearch();
  const table = await screen.findByRole('table');

  // Assert
  expect(table).toBeInTheDocument();
  expect(mockApi).toHaveBeenCalledTimes(1);
  expect(mockApi).toHaveBeenCalledWith('Inception', 1);
});

test('should call the API for movies when the user changes the page', async () => {
  // Arrange
  render(<App />);
  const mockApi = (API.getMovies as jest.Mock).mockResolvedValue({
    Search: [
      {
        Title: 'Inception',
        Year: '2018',
        imdbID: 'ttyID',
        Poster: '',
        Rating: []
      }
    ],
    totalResults: 11
  });

  // Act
  await fireSearch();

  const pageTwoButton = await screen.findByRole('button', {
    name: /go to page 2/i
  });
  await userEvent.click(pageTwoButton);

  // Assert
  expect(mockApi).toHaveBeenCalledTimes(2);
  expect(mockApi).toHaveBeenCalledWith('Inception', 2);
});

test('should display the alert when the api call errors', async () => {
  // Arrange
  render(<App />);
  const mockApi = (API.getMovies as jest.Mock).mockRejectedValue(new Error());

  // Act
  await fireSearch();
  const alert = await screen.findByRole('alert');

  // Assert
  expect(alert).toBeInTheDocument();
});

test('should dislay the no results page when no results are found', async () => {
  // Arrange
  render(<App />);
  const mockApi = (API.getMovies as jest.Mock).mockResolvedValue({
    Search: [
      {
        Title: 'Inception',
        Year: '2018',
        imdbID: 'ttyID',
        Poster: '',
        Rating: []
      }
    ]
  });

  // Act
  await fireSearch();
  const heading = screen.getByRole('heading');

  // Assert
  expect(heading).toHaveTextContent('No results found');
});

test('should only add search to previous searches if successful and previous searches has less than 5 searches', async () => {
  // Arrange
  render(<App />);
  (API.getMovies as jest.Mock).mockResolvedValue({
    Search: [
      {
        Title: 'Inception',
        Year: '2018',
        imdbID: 'ttyID',
        Poster: '',
        Rating: []
      }
    ],
    totalResults: 4
  });

  // Act (build up recent searches)
  await fireSearch();
  await fireSearch('hello');
  await fireSearch('welcome');
  await fireSearch('howdy');
  await fireSearch('okay');
  await fireSearch('one more');

  // Act (fail next search)
  (API.getMovies as jest.Mock).mockResolvedValue({
    Search: [],
    totalResults: 0,
    Error: 'too many results'
  });

  await fireSearch();
  const recentSearches = await screen.findByRole('list');

  // Assert
  expect(recentSearches.children).toHaveLength(5);
});

test('should reset the app when clicking the logo', async () => {
  // Arrange
  render(<App />);
  (API.getMovies as jest.Mock).mockResolvedValue({
    Search: [
      {
        Title: 'Inception',
        Year: '2018',
        imdbID: 'ttyID',
        Poster: '',
        Rating: []
      }
    ],
    totalResults: 4
  });

  // Act
  await fireSearch();
  const image = screen.getByAltText('go to main page');
  await userEvent.click(image);
  const heading = await screen.findByRole('heading');

  // Assert
  expect(heading).toHaveTextContent('Search for a movie to begin');
});

test('it should error the search bar if there is no search text', async () => {
  // Arrange
  render(<App />);

  // Act
  const searchBar = screen.getByRole('textbox', {
    name: /enter a movie title/i
  });
  const button = screen.getByRole('button');
  await userEvent.click(button);

  // Assert
  expect(searchBar.getAttribute('aria-invalid')).toBe('true');
});
