import { render, screen } from '@testing-library/react';
import HeaderButtons from '.';

describe('HeaderButtons', () => {
  it('renders header buttons with download app button, login button, and more options button', () => {
    render(<HeaderButtons />);

    const downloadAppButton = screen.getByText('Baixar app');
    expect(downloadAppButton).toBeTruthy();

    const loginButton = screen.getByText('Entrar');
    expect(loginButton).toBeTruthy();

    const moreOptionsButton = screen.getByTestId('more-options-button');
    expect(moreOptionsButton).toBeTruthy();
  });

  it('calls testAlert when buttons are clicked', () => {
    const testAlertMock = jest.fn();
    jest.spyOn(global, 'alert').mockImplementation(testAlertMock);

    render(<HeaderButtons />);

    const downloadAppButton = screen.getByText('Baixar app');
    downloadAppButton.click();

    expect(testAlertMock).toHaveBeenCalledTimes(1);

    const loginButton = screen.getByText('Entrar');
    loginButton.click();

    expect(testAlertMock).toHaveBeenCalledTimes(2);

    const moreOptionsButton = screen.getByTestId('more-options-button');
    moreOptionsButton.click();

    expect(testAlertMock).toHaveBeenCalledTimes(3);
  });
});
