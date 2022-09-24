import { render, screen, cleanup } from '@testing-library/react'
import Newscard from '../Newscard';

// Reset the DOM after each test
afterEach(() => {
  cleanup();
})

// Test the Newscard component
test('Should render Newscard', () => {
  render(<Newscard />);
  const newscardComponent = screen.getByTestId('newscard');
  expect(newscardComponent).toBeInTheDocument();
  const postTitle = screen.getByTestId('post-title');
  expect(postTitle).toBeInTheDocument('post-title');
  const newscardBody = screen.getByTestId('newscard-body');
  expect(newscardBody).toBeInTheDocument('newscard-body');
  const storyByAndType = screen.getByTestId('story-by-and-type');
  expect(storyByAndType).toBeInTheDocument('story-by-and-type');
  const datePosted = screen.getByTestId('date-posted');
  expect(datePosted).toBeInTheDocument('date-posted');
  const storyUrl = screen.getByTestId('story-url');
  expect(storyUrl).toBeInTheDocument('story-url');
})