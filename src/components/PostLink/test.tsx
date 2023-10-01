import React from 'react';
import { render, screen } from '@testing-library/react';
import PostLink from './';

describe('PostLink', () => {
  it('renders the link element with the provided URL', () => {
    const url = 'https://example.com';

    render(<PostLink url={url} />);

    const linkElement = screen.getByText(url);
    expect(linkElement).toBeTruthy();

    const hrefAttribute = linkElement.getAttribute('href');
    expect(hrefAttribute).toBe(url);

    const targetAttribute = linkElement.getAttribute('target');
    expect(targetAttribute).toBe('_blank');
  });
});
