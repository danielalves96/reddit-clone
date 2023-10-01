import { render, screen } from '@testing-library/react';
import PostSelfText from '.';

describe('PostSelfText', () => {
  it('renders self text correctly ', () => {
    const text = 'This is a sample self text';

    render(<PostSelfText text={text} />);

    const textBoxElement = screen.getByText(text);
    expect(textBoxElement).toBeTruthy();
  });
});
