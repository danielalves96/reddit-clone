import React from 'react';
import { render, screen } from '@testing-library/react';
import ComunityMainData from '.';
import * as utils from 'src/utils/utils';

jest.mock('src/utils/utils', () => ({
  ...jest.requireActual('src/utils/utils'),
  testAlert: jest.fn(),
}));

describe('ComunityMainData', () => {
  it('renders title, subtitle, and description correctly', () => {
    const props = {
      title: 'Community Title',
      subtitle: 'Community Subtitle',
      description: 'Community Description',
    };

    render(<ComunityMainData {...props} />);

    const titleElement = screen.getByText('Community Title');
    const subtitleElement = screen.getByText('Community Subtitle');
    const descriptionElement = screen.getByText('Community Description');

    expect(titleElement).toBeTruthy();
    expect(subtitleElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
  });

  it('calls testAlert when "Unir-se" button is clicked', () => {
    const props = {
      title: 'Community Title',
      subtitle: 'Community Subtitle',
      description: 'Community Description',
    };

    render(<ComunityMainData {...props} />);

    const joinButton = screen.getByText('Unir-se');
    joinButton.click();

    expect(utils.testAlert).toHaveBeenCalled();
  });
});
