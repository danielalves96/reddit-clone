import React from 'react';
import { render, screen } from '@testing-library/react';
import PostItem from '.';

import { mockPost } from 'src/mocks/post';

describe('PostItem', () => {
  it('renders post item correctly', () => {
    render(<PostItem post={mockPost} />);

    const postTitle = screen.getByText(mockPost.title);
    expect(postTitle).toBeTruthy();

    if (mockPost.link_flair_text) {
      const flairBadge = screen.getByText(mockPost.link_flair_text);
      expect(flairBadge).toBeTruthy();
    }

    if (mockPost.selftext) {
      const selfText = screen.getByText(mockPost.selftext);
      expect(selfText).toBeTruthy();
    }

    if (mockPost.post_hint === 'image') {
      const thumbnailImage = screen.getByAltText('Thumbnail Image');
      expect(thumbnailImage).toBeTruthy();
    }

    if (mockPost.post_hint === 'link') {
      const postLink = screen.getByText(mockPost.url);
      expect(postLink).toBeTruthy();
    }

    const upvotes = screen.getByText(mockPost.ups.toString());
    expect(upvotes).toBeTruthy();

    const comments = screen.getByText(mockPost.num_comments.toString());
    expect(comments).toBeTruthy();
  });
});
