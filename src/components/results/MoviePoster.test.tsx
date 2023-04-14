import { render, screen } from '@testing-library/react';
import MoviePoster from './MoviePoster';

function renderElement(posterSrc: string) {
  const poster = posterSrc;
  const { container } = render(<MoviePoster poster={poster} />);

  return container;
}

test('shouldrender not found image if movie poster is N/A', () => {
  // Arrange
  renderElement('');

  // Act
  const image = screen.getByRole('presentation', { hidden: true });

  //Assert
  expect(image.getAttribute('src')).toBe('./not-found.png');
});

test('should render not found image if movie poster is falsey', () => {
  // Arrange
  renderElement('');

  // Act
  const image = screen.getByRole('presentation', { hidden: true });

  //Assert
  expect(image.getAttribute('src')).toBe('./not-found.png');
});

test('should render the image as display none if in loading state', () => {
  // Arrange
  const container = renderElement('real poster');

  // Act
  const image = screen.getByRole('presentation', { hidden: true });
  const loadingSkeleton = container.querySelector('span');

  // Assert
  expect(image.style.display).toBe('none');
  expect(loadingSkeleton).toBeInTheDocument();
});
