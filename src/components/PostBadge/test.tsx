import { render, screen } from '@testing-library/react';
import PostBadge from '.';

describe('PostBadge', () => {
  it('renders the text and color correctly', () => {
    const text = 'New';
    const color = 'green';

    render(<PostBadge text={text} color={color} />);

    const badgeElement = screen.getByText(text);

    const badgeStyle = window.getComputedStyle(badgeElement);
    expect(badgeElement).toBeTruthy();
    expect(badgeStyle.backgroundColor).toBe(color);
  });
  it('calls testAlert when clicked', () => {
    const testAlertMock = jest.fn();
    jest.spyOn(global, 'alert').mockImplementation(testAlertMock);

    render(<PostBadge text="Example" color="red" />);

    const badgeElement = screen.getByText('Example');

    badgeElement.click();

    expect(testAlertMock).toHaveBeenCalledTimes(1);
  });
});
