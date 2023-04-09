import { render, screen } from '@testing-library/react';
import EmptySearch from './EmptySearch';

test('renders the empty search text', () => {
  const element = render(<EmptySearch />);
  expect(element.container).toHaveTextContent(/Search for a movie to begin/i);
});
