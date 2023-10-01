import { testAlert } from './utils';

describe('testAlert', () => {
  it('calls alert with the expected message', () => {
    const originalAlert = window.alert;
    window.alert = jest.fn();

    testAlert();

    expect(window.alert).toHaveBeenCalledWith(
      'Essa função não está disponível, pois a aplicação é apenas para fins de prova de conhecimento.',
    );

    window.alert = originalAlert;
  });
});
