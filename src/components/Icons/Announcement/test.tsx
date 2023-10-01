import React from 'react';
import { render } from '@testing-library/react';
import { IconAnnouncement } from '.';

describe('IconAnnouncement', () => {
  it('renders the announcement icon with specified size and color', () => {
    const size = 20;
    const color = 'red';

    const { container } = render(
      <IconAnnouncement size={size} color={color} />,
    );

    const pathElement = container.querySelector('path');

    expect(pathElement).toBeTruthy();

    expect(pathElement?.getAttribute('fill')).toBe(color);
  });

  it('renders the announcement icon with default size and color', () => {
    const { container } = render(<IconAnnouncement size={20} />);

    const pathElement = container.querySelector('path');

    expect(pathElement).toBeTruthy();

    expect(pathElement?.getAttribute('fill')).toBe('black');
  });
});
