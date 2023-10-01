import { fireEvent, render, screen } from '@testing-library/react';
import { SidebarTopicTilte } from '.';

describe('SidebarTopicTilte', () => {
  it('renders title and icon', () => {
    const title = 'Title';
    const isOpen = false;
    const onClick = jest.fn();

    render(
      <SidebarTopicTilte title={title} isOpen={isOpen} onClick={onClick} />,
    );

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeTruthy();

    const chevronDownIcon = screen.getByTestId('IconChevronDown');
    expect(chevronDownIcon).toBeTruthy();

    fireEvent.click(titleElement);

    expect(onClick).toHaveBeenCalled();
  });

  it('displays the correct icon based on the "isOpen" prop', () => {
    const title = 'Title';
    const isOpen = true;

    render(
      <SidebarTopicTilte title={title} isOpen={isOpen} onClick={() => {}} />,
    );

    const chevronUpIcon = screen.getByTestId('IconChevronUp');
    expect(chevronUpIcon).toBeTruthy();

    const chevronDownIcon = screen.queryByTestId('IconChevronDown');
    expect(chevronDownIcon).not.toBeTruthy();
  });
});
