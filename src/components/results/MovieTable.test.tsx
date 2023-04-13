import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieTable from './MovieTable';

function renderComponent(count = 2, updatePage = jest.fn()) {
  const movies: Movie[] = [
    {
      imdbID: 'sample_id',
      Year: '2014',
      Title: 'When Harry Met Sally',
      Poster: '',
      Rating: []
    },
    {
      imdbID: 'sample_id2',
      Year: '2020',
      Title: 'Title of Other Movie',
      Poster: '',
      Rating: []
    }
  ];
  render(<MovieTable results={{ movies, count }} updatePage={updatePage} />);

  return { movies, count };
}

test('should render a count of the results based on the movies', () => {
  // Arrange
  const movies: Movie[] = [];
  const count = 0;
  render(<MovieTable results={{ movies, count }} updatePage={jest.fn()} />);

  //Act
  const heading = screen.getByRole('heading');

  // Assert
  expect(heading).toHaveTextContent('0 Results');
});

test('should render a table with 2 rows for each movie and a header row', () => {
  // Arrange
  renderComponent();

  //Act
  const heading = screen.getByRole('heading');
  const table = screen.getByRole('table');
  const rows = screen.getAllByRole('row');

  // Assert
  expect(heading).toHaveTextContent('2 Results');
  expect(table).toBeInTheDocument();
  expect(rows.length).toBe(5);
});

test('should render the title, year, and a button to toggle the details for each movie', async () => {
  // Arrange
  const { movies } = renderComponent();

  //Act
  for (let { Title, Year } of movies) {
    const titleCell = screen.getByRole('cell', {
      name: `${Title} Released In: ${Year}`
    });

    // Assert
    expect(titleCell).toBeInTheDocument();
  }

  const [expandButton] = within(screen.getByRole('table')).getAllByRole(
    'button'
  );
  expect(expandButton).toBeInTheDocument();
  expect(expandButton.getAttribute('aria-label')).toBe('expand details');
});

test('clicking the expand button should change the icon', async () => {
  // Arrange
  const movies: Movie[] = [
    {
      imdbID: 'sample_id',
      Year: '2014',
      Title: 'When Harry Met Sally',
      Poster: '',
      Rating: []
    }
  ];
  const count = 1;
  render(<MovieTable results={{ movies, count }} updatePage={jest.fn()} />);

  // Act
  const expandButton = screen.getByRole('button', {
    name: /expand details/i
  });

  // Assert
  expect(expandButton.getAttribute('aria-label')).toBe('expand details');
  expect(
    screen.queryByTestId('KeyboardArrowDownOutlinedIcon')
  ).toBeInTheDocument();
  expect(screen.queryByTestId('KeyboardArrowUpOutlinedIcon')).toBeNull();

  await userEvent.click(expandButton);

  expect(screen.queryByTestId('KeyboardArrowDownOutlinedIcon')).toBeNull();
  expect(
    screen.queryByTestId('KeyboardArrowUpOutlinedIcon')
  ).toBeInTheDocument();
});

test('should not show the paginator when the count has exactly 10 results', () => {
  // Arrange
  renderComponent(10);

  // Act
  const paginator = screen.queryByRole('list');

  // Assert
  expect(paginator).toBeNull();
});

test('should show the paginator when the count has 11 results', () => {
  // Arrange
  renderComponent(11);

  // Act
  const paginator = screen.queryByRole('list');

  // Assert
  expect(paginator).not.toBeNull();
  expect(paginator).toBeInTheDocument();
});

test('should handle page change', async () => {
  // Arrange
  const mock = jest.fn();
  const windowMock = (window.HTMLElement.prototype.scrollIntoView = jest.fn());
  renderComponent(11, mock);

  // Act
  const paginator = screen.getByRole('list');
  const [prevPage, pageOne, pageTwo, nextPage] =
    within(paginator).getAllByRole('button');

  await userEvent.click(nextPage);

  // Assert
  expect(prevPage).toBeInTheDocument();
  expect(pageOne).toBeInTheDocument();
  expect(pageTwo).toBeInTheDocument();
  expect(nextPage).toBeInTheDocument();

  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith(2);
  expect(windowMock).toHaveBeenCalled();
});
