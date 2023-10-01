import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  it('renders header with logo, tags input, and header buttons', () => {
    render(<Header />);

    const logoElement = screen.getByTestId('header-logo');
    expect(logoElement).toBeTruthy();

    const tagsInputElement = screen.getByTestId('tags-input');
    expect(tagsInputElement).toBeTruthy();

    const headerButtonsElement = screen.getByTestId('header-buttons');
    expect(headerButtonsElement).toBeTruthy();
  });
});
