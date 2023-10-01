import { fireEvent, render, screen } from '@testing-library/react';
import PostHeader from '.';

import * as utils from 'src/utils/utils';
jest.mock('src/utils/utils');

import { mockPost } from 'src/mocks/post';

describe('PostHeader', () => {
  it('renders PostHeader component with post data and invokes testAlert on icon click', () => {
    render(<PostHeader post={mockPost} />);

    const authorImage = screen.getByAltText('Author Image');
    expect(authorImage).toBeTruthy();

    const authorName = screen.getByText(`u/${mockPost.author}`);
    expect(authorName).toBeTruthy();

    const dotsIcon = screen.getByTestId('IconDots');
    fireEvent.click(dotsIcon);

    expect(utils.testAlert).toHaveBeenCalledTimes(1);
  });
});
