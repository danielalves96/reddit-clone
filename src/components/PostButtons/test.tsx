import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import PostButtons from '.';

describe('PostButtons', () => {
  it('renders post buttons with correct text and icons', () => {
    const ups = 42;
    const numComments = 8;

    render(<PostButtons ups={ups} num_comments={numComments} />);

    const upvoteButton = screen.getByText(ups.toString());
    expect(upvoteButton).toBeTruthy();
    expect(screen.getByTestId('IconArrowUp')).toBeTruthy();
    expect(screen.getByTestId('IconArrowDown')).toBeTruthy();

    const commentsButton = screen.getByText(numComments.toString());
    expect(commentsButton).toBeTruthy();
    expect(screen.getByTestId('IconComment')).toBeTruthy();

    const shareButton = screen.getByText('Compartilhar');
    expect(shareButton).toBeTruthy();
    expect(screen.getByTestId('IconShare')).toBeTruthy();
  });

  it('calls testAlert when buttons are clicked', () => {
    const ups = 42;
    const numComments = 8;

    const testAlertMock = jest.fn();
    jest.spyOn(global, 'alert').mockImplementation(testAlertMock);

    render(<PostButtons ups={ups} num_comments={numComments} />);

    const upvoteButton = screen.getByText(ups.toString());
    fireEvent.click(upvoteButton);

    const commentsButton = screen.getByText(numComments.toString());
    fireEvent.click(commentsButton);

    const shareButton = screen.getByText('Compartilhar');
    fireEvent.click(shareButton);

    expect(testAlertMock).toHaveBeenCalledTimes(3);
  });
});
