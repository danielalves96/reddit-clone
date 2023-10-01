import { render, screen } from '@testing-library/react';
import CommunityDetails from '.';

describe('CommunityDetails', () => {
  it('renders component with expected data', () => {
    render(<CommunityDetails />);

    const titleElement = screen.getByText('r/pokemon');
    expect(titleElement).toBeTruthy();

    const descriptionElement = screen.getByText(
      /r\/pokemon is an unofficial Pokémon fan community/,
    );
    expect(descriptionElement).toBeTruthy();

    const subtitleElement = screen.getByText('Pokémon: Gotta Catch’Em All!');
    expect(subtitleElement).toBeTruthy();

    const membersElement = screen.getByText('4.4m');
    expect(membersElement).toBeTruthy();

    const onlineElement = screen.getByText('4.4k');
    expect(onlineElement).toBeTruthy();

    const rankElement = screen.getByText('Top 1%');
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
