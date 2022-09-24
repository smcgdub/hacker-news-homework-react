import { render, screen, cleanup } from '@testing-library/react'
import Navbar from '../Navbar';

// Reset the DOM after each test
afterEach(() => {
  cleanup();
})

// Test the Navbar component
test('Should render Navbar', () => {
  render(<Navbar />);
  const navbarComponent = screen.getByTestId('navbar');
  expect(navbarComponent).toBeInTheDocument();
  expect(navbarComponent).toHaveTextContent('Hacker News');
})