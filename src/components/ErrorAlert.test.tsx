import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorAlert from './ErrorAlert';

test('renders when show alert is true', async () => {
  // ARRANGE
  const showAlert = true;
  const { container } = render(
    <ErrorAlert
      showAlert={showAlert}
      setShowAlert={jest.fn()}
      alertMessage={''}
    />
  );

  // ACT
  const snackbar = await screen.findByRole('presentation');

  // ASSERT
  expect(snackbar).toBeInTheDocument();
  expect(container).not.toBeEmptyDOMElement();
});

test('renders empty container when show alert is false', () => {
  // ARRANGE
  const showAlert = false;
  const { container } = render(
    <ErrorAlert
      showAlert={showAlert}
      setShowAlert={jest.fn()}
      alertMessage={''}
    />
  );

  // ASSERT
  expect(container).toBeEmptyDOMElement();
});

test('should call set show alert with false when the close button is clicked', async () => {
  // ARRANGE
  const showAlert = true;
  const mock = jest.fn();
  render(
    <ErrorAlert showAlert={showAlert} setShowAlert={mock} alertMessage={''} />
  );

  // Act
  const button = await screen.findByRole('button', { hidden: true });
  await userEvent.click(button);

  // ASSERT
  expect(mock).toHaveBeenCalledWith(false);
});
