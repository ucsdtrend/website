import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App as expected', () => {
  render(<App />);
  const appElement = screen.getByTestId("App-element");
  expect(appElement).toBeInTheDocument();
});
