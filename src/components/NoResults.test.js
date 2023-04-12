import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NoResults from './NoResults';

test('renders the component with the too many results state', async () => {
  // Arrange
  const reason = 'too MANY results';
  render(<NoResults reason={reason} onSearch={jest.fn()} />);

  // Act
  const header = screen.getByRole('heading');
  const divider = screen.getByRole('separator');
  const suggestion = screen.getByText(
    'Please narrow the search down with a more specific movie title.'
  );

  // Assert
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent('Too many results.');
  expect(divider).toBeInTheDocument();
  expect(suggestion).toBeInTheDocument();
});

test('renders the component with the no results state', () => {
  // Arrange
  const reason = 'some other reason';
  render(<NoResults reason={reason} onSearch={jest.fn()} />);

  // Act
  const header = screen.getByRole('heading');
  const divider = screen.getByRole('separator');
  const suggestions = screen.getByRole('list');

  // Assert
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent('No results found.');
  expect(divider).toBeInTheDocument();
  expect(suggestions).toBeInTheDocument();
  expect(suggestions.children).toHaveLength(2);
});

test('renders a list of previous successful searches', () => {
  // Arrange
  const mock = jest.fn();
  const reason = 'some other reason';
  const previousSearches = [
    { value: 'hello', count: 720 },
    { value: 'whatever', count: 475 }
  ];
  render(
    <NoResults
      reason={reason}
      onSearch={mock}
      previousSearches={previousSearches}
    />
  );

  // Act
  const previousSearchButtons = screen.getAllByRole('button');
  previousSearchButtons.forEach((button, index) => {
    // Assert
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(previousSearches[index].value);
  });
});

test('calls on search on previous search click', async () => {
  // Arrange
  const mock = jest.fn();
  const reason = 'some other reason';
  const previousSearches = [
    { value: 'hello', count: 720 },
    { value: 'whatever', count: 475 }
  ];
  render(
    <NoResults
      reason={reason}
      onSearch={mock}
      previousSearches={previousSearches}
    />
  );

  // Act
  const helloButton = screen.getByRole('button', { name: 'hello' });
  await userEvent.click(helloButton);

  // Assert
  expect(mock).toHaveBeenCalledWith('hello');
});
