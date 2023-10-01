import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthorSection from '.';

describe('AuthorSection', () => {
  it('renders component with correct information', () => {
    render(<AuthorSection />);

    const sectionTitle = screen.getByText('INFO');
    expect(sectionTitle).toBeTruthy();

    const authorText = screen.getByText(
      'Desenvolvido por Daniel Luiz Alves, portfólio em:',
    );
    expect(authorText).toBeTruthy();

    const authorLink = screen.getByRole('link', {
      name: /https:\/\/daniel-luiz-alves.vercel.app\//i,
    });
    expect(authorLink).toBeTruthy();

    expect(authorLink.getAttribute('href')).toBe(
      'https://daniel-luiz-alves.vercel.app/',
    );
    expect(authorLink.getAttribute('target')).toBe('_blank');
  });
});
