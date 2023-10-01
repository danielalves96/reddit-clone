import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
  it('renders button with text', () => {
    const buttonText = 'Click Me';
    render(<Button text={buttonText} />);

    const button = screen.getByText(buttonText);
    expect(button).toBeTruthy();
  });

  it('calls onClick when button is clicked', () => {
    const buttonText = 'Click Me';
    const onClick = jest.fn();
    render(<Button text={buttonText} onClick={onClick} />);

    const button = screen.getByText(buttonText);
    button.click();

    expect(onClick).toHaveBeenCalled();
  });
});
