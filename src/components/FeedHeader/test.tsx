import React from 'react';
import { render, screen } from '@testing-library/react';
import FeedHeader from '.';

describe('FeedHeader', () => {
  it('renders header elements correctly', () => {
    render(<FeedHeader />);

    const communityImage = screen.getByAltText('image');
    const communityName = screen.getByText('r/pokemon');
    const sortLabel = screen.getByText('Ordenar por:');
    const postButton = screen.getByText('Postar');

    expect(communityImage).toBeTruthy();
    expect(communityName).toBeTruthy();
    expect(sortLabel).toBeTruthy();
    expect(postButton).toBeTruthy();
  });
});
