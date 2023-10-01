import React from 'react';
import { render, screen } from '@testing-library/react';
import Divider from '.';

describe('Divider', () => {
  it('renders the divider element with the correct data-testid', () => {
    render(<Divider />);

    const dividerElement = screen.getByTestId('divider');

    expect(dividerElement).toBeTruthy();
  });
});
