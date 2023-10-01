import { render, screen } from '@testing-library/react';
import PostImage from '.';

describe('PostImage', () => {
  it('renders the image element with the provided thumbnail', () => {
    const thumbnailUrl = 'https://example.com/image.jpg';

    render(<PostImage thumbnail={thumbnailUrl} />);

    const imageElement = screen.getByAltText('thumbnail');
    expect(imageElement).toBeTruthy();

    const srcAttribute = imageElement.getAttribute('src');
    expect(srcAttribute).toBe(thumbnailUrl);
  });
});
