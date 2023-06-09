import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

test('should render an input and a button', () => {
  // Arrange
  render(
    <SearchBar
      onSearch={jest.fn()}
      isLoading={false}
      error={false}
      setError={jest.fn()}
    />
  );

  // Act
  const searchBar = screen.getByRole('textbox', {
    name: /enter a movie title/i
  });
  const button = screen.getByRole('button');

  // Assert
  expect(searchBar).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('it should call trigger search when the search is submitted', async () => {
  // Arrange
  const mock = jest.fn();
  render(
    <SearchBar
      onSearch={mock}
      isLoading={false}
      error={false}
      setError={jest.fn()}
    />
  );

  // Act
  const searchBar = screen.getByRole('textbox', {
    name: /enter a movie title/i
  });
  const button = screen.getByRole('button');
  await userEvent.click(searchBar);
  await userEvent.keyboard('Inception');
  await userEvent.click(button);

  // Assert
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith('Inception');
  expect(searchBar.getAttribute('aria-invalid')).toBe('false');
});

test('it should error if there is no search text', async () => {
  // Arrange
  const mock = jest.fn();
  const mockSetError = jest.fn();
  render(
    <SearchBar
      onSearch={mock}
      isLoading={false}
      error={false}
      setError={mockSetError}
    />
  );

  // Act
  const searchBar = screen.getByRole('textbox', {
    name: /enter a movie title/i
  });
  const button = screen.getByRole('button');
  await userEvent.click(button);

  // Assert
  expect(mock).toHaveBeenCalledTimes(0);
  expect(mockSetError).toHaveBeenCalledWith(true);
});

test('should clear out the search bar on a search', async () => {
  // Arrange
  const mock = jest.fn();
  render(
    <SearchBar
      onSearch={mock}
      isLoading={false}
      error={false}
      setError={jest.fn()}
    />
  );

  // Act
  const searchBar = screen.getByRole('textbox', {
    name: /enter a movie title/i
  });
  const button = screen.getByRole('button');
  await userEvent.click(searchBar);
  await userEvent.keyboard('Inception');
  await userEvent.click(button);

  // Assert
  expect(searchBar).toHaveTextContent('');
});
