import { render, screen } from '@testing-library/react';
import MenuSection from '.';

describe('MenuSection', () => {
  it('renders the title and menu items correctly', () => {
    const title = 'MENU';
    const items = ['Item 1', 'Item 2', 'Item 3'];

    render(<MenuSection title={title} items={items} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeTruthy();

    items.forEach((item) => {
      const menuItemElement = screen.getByText(item);
      expect(menuItemElement).toBeTruthy();
    });
  });
});
