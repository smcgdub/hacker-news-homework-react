import { render, screen, cleanup } from '@testing-library/react'
import Header from '../header';

// Reset the DOM after each test
afterEach(() => {
  cleanup();
})

// Test the Header component
test('Should render Header', () => {
  render(<Header />);
  const headerComponent = screen.getByTestId('header-component');
  expect(headerComponent).toBeInTheDocument();
  expect(headerComponent).toHaveTextContent('Welcome To Hacker News');
  expect(headerComponent).toHaveTextContent('Your social news source');
  const getLatestPostsButton = screen.getByTestId('get-latest-posts');
  expect(getLatestPostsButton).toBeInTheDocument();
  expect(headerComponent).toHaveTextContent('Read Latest News');
  const getTopPostsButton = screen.getByTestId('get-top-posts');
  expect(getTopPostsButton).toBeInTheDocument();
  expect(headerComponent).toHaveTextContent('Read Top News');
  const resetAllNewsButton = screen.getByTestId('reset-all-news');
  expect(resetAllNewsButton).toBeInTheDocument();
  expect(headerComponent).toHaveTextContent('Reset All News');
})