import { fireEvent, render, screen } from '@testing-library/react';
import { testAlert } from 'src/utils/utils';
import { TagItem } from '.';

jest.mock('src/utils/utils', () => ({
  testAlert: jest.fn(),
}));

describe('TagItem', () => {
  it('renders tag item with community name and calls testAlert on close icon click', () => {
    render(<TagItem />);

    const communityNameElement = screen.getByText('r/pokemon');
    expect(communityNameElement).toBeTruthy();

    const closeIconElement = screen.getByTestId('CloseIcon');
    expect(closeIconElement).toBeTruthy();

    fireEvent.click(closeIconElement);

    expect(testAlert).toHaveBeenCalledTimes(1);
  });
});
