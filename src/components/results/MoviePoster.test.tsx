import { render, screen } from '@testing-library/react';
import MoviePoster from './MoviePoster';

function renderElement(posterSrc: string) {
  const poster = posterSrc;
  const { container } = render(<MoviePoster poster={poster} />);

  return container;
}

test('should not render if movie poster is N/A', () => {
  // Arrange
  const container = renderElement('N/a');

  //Assert
  expect(container).toBeEmptyDOMElement();
});

test('should not render if movie poster is falsey', () => {
  // Arrange
  const container = renderElement('');

  //Assert
  expect(container).toBeEmptyDOMElement();
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
