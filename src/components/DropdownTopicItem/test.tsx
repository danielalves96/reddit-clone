import React from 'react';
import { render, screen } from '@testing-library/react';
import DropdownTopicItem from '.';
import * as utils from 'src/utils/utils';

jest.mock('src/utils/utils', () => ({
  ...jest.requireActual('src/utils/utils'),
  testAlert: jest.fn(),
}));

describe('DropdownTopicItem', () => {
  it('renders text correctly', () => {
    const props = {
      text: 'Topic Text',
      icon: (
        <svg
          name="bi-icon"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm0 1a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-7-7z" />
          <path d="M7.5 4.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 0-1z" />
        </svg>
      ),
    };

    render(<DropdownTopicItem {...props} />);

    const textElement = screen.getByText('Topic Text');

    expect(textElement).toBeTruthy();
  });

  it('calls testAlert when clicked', () => {
    const props = {
      text: 'Topic Text',
      icon: (
        <svg
          name="bi-icon"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm0 1a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-7-7z" />
          <path d="M7.5 4.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 0-1z" />
        </svg>
      ),
    };

    render(<DropdownTopicItem {...props} />);

    const itemElement = screen.getByText('Topic Text');
    itemElement.click();

    expect(utils.testAlert).toHaveBeenCalled();
  });
});
