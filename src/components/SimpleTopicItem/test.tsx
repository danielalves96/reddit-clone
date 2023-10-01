import { fireEvent, render, screen } from '@testing-library/react';
import { testAlert } from 'src/utils/utils';
import SimpleTopicItem from '.';

jest.mock('src/utils/utils', () => ({
  testAlert: jest.fn(),
}));

const mockItem = {
  text: 'Item Text',
  icon: <svg data-testid="mock-icon">Mock Icon</svg>,
};

describe('SimpleTopicItem', () => {
  it('renders text and icon and calls testAlert on click', () => {
    render(<SimpleTopicItem text={mockItem.text} icon={mockItem.icon} />);

    const textElement = screen.getByText(mockItem.text);
    expect(textElement).toBeTruthy();

    const iconElement = screen.getByTestId('mock-icon');
    expect(iconElement).toBeTruthy();

    fireEvent.click(textElement);

    expect(testAlert).toHaveBeenCalledTimes(1);
  });
});
