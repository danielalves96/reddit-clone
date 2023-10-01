import React from 'react';
import { render } from '@testing-library/react';
import { IconJoystick } from '.';

describe('IconJoystick', () => {
  it('renders the icon with specified size and color', () => {
    const size = 20;
    const color = 'red';

    const { container } = render(<IconJoystick size={size} color={color} />);

    const pathElement = container.querySelector('path');

    expect(pathElement).toBeTruthy();

    expect(pathElement?.getAttribute('fill')).toBe(color);
  });

  it('renders the icon with default size and color', () => {
    const { container } = render(<IconJoystick size={20} />);

    const pathElement = container.querySelector('path');

    expect(pathElement).toBeTruthy();

    expect(pathElement?.getAttribute('fill')).toBe('black');
  });
});
