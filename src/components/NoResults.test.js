import { render, screen } from '@testing-library/react';
import NoResults from './NoResults';

test('renders the component with the too many results state', async () => {
  // Arrange
  const noResultReason = 'too MANY results';
  render(<NoResults reason={noResultReason} />);

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
  const noResultReason = 'some other reason';
  render(<NoResults reason={noResultReason} />);

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
