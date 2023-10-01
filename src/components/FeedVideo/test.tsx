import { render, screen } from '@testing-library/react';
import FeedVideo from '.';

describe('FeedVideo', () => {
  it('renders video element with correct source attributes', () => {
    const media = {
      reddit_video: {
        fallback_url: 'https://example.com/video.mp4',
      },
    };

    render(<FeedVideo media={media} />);

    const videoElement = screen.queryByRole('video');

    expect(videoElement).not.toBeNull();

    if (videoElement) {
      const sourceElements = videoElement.getElementsByTagName('source');
      expect(sourceElements.length).toBe(2);

      const mp4Source = sourceElements[0];
      expect(mp4Source.getAttribute('src')).toBe(
        'https://example.com/video.mp4',
      );
      expect(mp4Source.getAttribute('type')).toBe('video/mp4');

      const oggSource = sourceElements[1];
      expect(oggSource.getAttribute('src')).toBe(
        'https://example.com/video.mp4',
      );
      expect(oggSource.getAttribute('type')).toBe('video/ogg');
    }
  });
});
