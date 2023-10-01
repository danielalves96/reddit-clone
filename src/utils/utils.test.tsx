import { testAlert, removeQueryStringFromURL, truncateString } from './utils';

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

describe('removeQueryStringFromURL', () => {
  it('removes query string from a URL with query string PNG', () => {
    const urlWithQuery = 'https://example.com/page.png?query=123';
    const result = removeQueryStringFromURL(urlWithQuery);
    expect(result).toBe('https://example.com/page.png');
  });

  it('removes query string from a URL with query string JPG', () => {
    const urlWithQuery = 'https://example.com/page.jpg?query=123';
    const result = removeQueryStringFromURL(urlWithQuery);
    expect(result).toBe('https://example.com/page.jpg');
  });

  it('removes query string from a URL with query string JPEG', () => {
    const urlWithQuery = 'https://example.com/page.jpeg?query=123';
    const result = removeQueryStringFromURL(urlWithQuery);
    expect(result).toBe('https://example.com/page.jpeg');
  });

  it('does not modify URL without query string', () => {
    const urlWithoutQuery = 'https://example.com/page';
    const result = removeQueryStringFromURL(urlWithoutQuery);
    expect(result).toBe(urlWithoutQuery);
  });

  it('handles URLs with file extensions', () => {
    const urlWithExtension = 'https://example.com/image.png?query=123';
    const result = removeQueryStringFromURL(urlWithExtension);
    expect(result).toBe('https://example.com/image.png');
  });
});

describe('truncateString', () => {
  it('truncates a long string to the specified maxLength', () => {
    const longString = 'This is a long string that needs to be truncated.';
    const maxLength = 9;
    const result = truncateString(longString, maxLength);
    expect(result).toBe('This is a...');
  });

  it('does not modify a short string', () => {
    const shortString = 'Short string';
    const maxLength = 20;
    const result = truncateString(shortString, maxLength);
    expect(result).toBe(shortString);
  });

  it('handles a string shorter than maxLength', () => {
    const inputString = 'Short string';
    const maxLength = 20;
    const result = truncateString(inputString, maxLength);
    expect(result).toBe(inputString);
  });
});
