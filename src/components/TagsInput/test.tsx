import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TagsInput from '.';

jest.mock('../TagItem', () => {
  return {
    TagItem: () => <div data-testid="tag-item-mock">Mocked TagItem</div>,
  };
});

describe('TagsInput', () => {
  it('renders the TagsInput component', () => {
    render(<TagsInput />);
    const tagsInput = screen.getByTestId('tags-input');
    expect(tagsInput).toBeTruthy();
  });

  it('renders the TagItem component', () => {
    render(<TagsInput />);
    const tagItem = screen.getByTestId('tag-item-mock');
    expect(tagItem).toBeTruthy();
  });

  it('renders an input element', () => {
    render(<TagsInput />);
    const inputElement = screen.getByPlaceholderText('Search Community');
    expect(inputElement).toBeTruthy();
  });

  it('handles user input correctly', () => {
    render(<TagsInput />);
    const inputElement = screen.getByPlaceholderText(
      'Search Community',
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'cyberpunk' } });

    expect(inputElement.value).toBe('cyberpunk');
  });
});
