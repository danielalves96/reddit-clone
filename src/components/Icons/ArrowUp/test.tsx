import React from 'react';
import { render } from '@testing-library/react';
import { IconArrowUp } from '.';

describe('IconArrowUp', () => {
  it('renders the icon with specified size and color', () => {
    const size = 20;
    const color = 'red';

    const { container } = render(<IconArrowUp size={size} color={color} />);

    const pathElement = container.querySelector('path');

    expect(pathElement).toBeTruthy();

    expect(pathElement?.getAttribute('fill')).toBe(color);
  });

  it('renders the icon with default size and color', () => {
    const { container } = render(<IconArrowUp size={20} />);

    const pathElement = container.querySelector('path');

    expect(pathElement).toBeTruthy();

    expect(pathElement?.getAttribute('fill')).toBe('black');
  });
});
