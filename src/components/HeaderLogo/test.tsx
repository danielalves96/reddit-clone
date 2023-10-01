import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderLogo from '.';

describe('HeaderLogo', () => {
  it('renders header logo with alt text and invokes testAlert on click', () => {
    const testAlertMock = jest.fn();
    jest.spyOn(global, 'alert').mockImplementation(testAlertMock);

    render(<HeaderLogo />);

    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeTruthy();

    logoElement.click();

    expect(testAlertMock).toHaveBeenCalledTimes(1);
  });
});
