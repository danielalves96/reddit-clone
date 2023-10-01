import { render, screen } from '@testing-library/react';
import CommunityDetails from '.';
import { communityData } from '@/mocks/communityDetail';

describe('CommunityDetails', () => {
  it('renders component with expected data', () => {
    render(<CommunityDetails />);

    const titleElement = screen.getByText(communityData.title);
    expect(titleElement).toBeTruthy();

    const descriptionElement = screen.getByText(
      /r\/pokemon is an unofficial Pokémon fan community/,
    );
    expect(descriptionElement).toBeTruthy();

    const subtitleElement = screen.getByText(communityData.subtitle);
    expect(subtitleElement).toBeTruthy();

    const membersElement = screen.getByText(communityData.members);
    expect(membersElement).toBeTruthy();

    const onlineElement = screen.getByText(communityData.online);
    expect(onlineElement).toBeTruthy();

    const rankElement = screen.getByText(communityData.rank);
    expect(rankElement).toBeTruthy();

    const dividerElements = screen.getAllByTestId('divider');
    expect(dividerElements.length).toBe(2);

    const authorSectionElement = screen.getByTestId('author-section');
    expect(authorSectionElement).toBeTruthy();
  });

  it('renders the wallpaper image', () => {
    render(<CommunityDetails />);

    const wallpaperImage = screen.getByAltText('wallpaper');
    expect(wallpaperImage).toBeTruthy();
  });
});
