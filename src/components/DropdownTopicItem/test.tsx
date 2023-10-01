import { render, screen } from '@testing-library/react';
import * as utils from 'src/utils/utils';
import DropdownTopicItem from '.';

jest.mock('src/utils/utils', () => ({
  ...jest.requireActual('src/utils/utils'),
  testAlert: jest.fn(),
}));

describe('DropdownTopicItem', () => {
  it('renders text correctly', () => {
    const props = {
      text: 'Topic Text',
      icon: <svg name="bi-icon"></svg>,
    };

    render(<DropdownTopicItem {...props} />);

    const textElement = screen.getByText('Topic Text');

    expect(textElement).toBeTruthy();
  });

  it('calls testAlert when clicked', () => {
    const props = {
      text: 'Topic Text',
      icon: <svg name="bi-icon"></svg>,
    };

    render(<DropdownTopicItem {...props} />);

    const itemElement = screen.getByText('Topic Text');
    itemElement.click();

    expect(utils.testAlert).toHaveBeenCalled();
  });
});
