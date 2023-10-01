import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ShowMoreButton from '.';

describe('ShowMoreButton', () => {
  it('renders the button correctly', () => {
    render(<ShowMoreButton />);

    const buttonElement = screen.getByText('Ver mais');
    expect(buttonElement).toBeTruthy();
  });

  it('calls testAlert when the button is clicked', () => {
    const testAlertMock = jest.fn();
    jest.spyOn(global, 'alert').mockImplementation(testAlertMock);

    render(<ShowMoreButton />);

    const buttonElement = screen.getByText('Ver mais');

    fireEvent.click(buttonElement);

    expect(testAlertMock).toHaveBeenCalledTimes(1);
  });
});
