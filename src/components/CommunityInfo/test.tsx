import { render, screen } from '@testing-library/react';
import * as utils from 'src/utils/utils';
import CommunityInfo from '.';

jest.mock('src/utils/utils', () => ({
  ...jest.requireActual('src/utils/utils'),
  testAlert: jest.fn(),
}));

describe('CommunityInfo', () => {
  it('renders members, online, and rank correctly', () => {
    const props = {
      members: '4.4m',
      online: '4.4k',
      rank: 'Top 1%',
    };

    render(<CommunityInfo {...props} />);

    const membersElement = screen.getByText('4.4m');
    const onlineElement = screen.getByText('4.4k');
    const rankElement = screen.getByText('Top 1%');

    expect(membersElement).toBeTruthy();
    expect(onlineElement).toBeTruthy();
    expect(rankElement).toBeTruthy();
  });

  it('calls testAlert when "Classificar por tamanho" is clicked', () => {
    const props = {
      members: '4.4m',
      online: '4.4k',
      rank: 'Top 1%',
    };

    render(<CommunityInfo {...props} />);

    const rankSection = screen.getByText('Classificar por tamanho');
    rankSection.click();

    expect(utils.testAlert).toHaveBeenCalled();
  });
});
