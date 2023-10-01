import React from 'react';
import { render } from '@testing-library/react';
import { IconStatus } from '.';

describe('IconStatus', () => {
  it('renders the status icon with specified size and color', () => {
    const size = 20;
    const color = 'blue';

    const { container } = render(<IconStatus size={size} color={color} />);

    const circleElement = container.querySelector('circle');

    expect(circleElement).toBeTruthy();

    expect(circleElement?.getAttribute('fill')).toBe(color);
  });

  it('renders the status icon with default size and color', () => {
    const { container } = render(<IconStatus size={20} />);

    const circleElement = container.querySelector('circle');

    expect(circleElement).toBeTruthy();

    expect(circleElement?.getAttribute('fill')).toBe('#78C277');
  });
});
