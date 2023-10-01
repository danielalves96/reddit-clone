export function testAlert() {
  return alert(
    'Essa função não está disponível, pois a aplicação é apenas para fins de prova de conhecimento.',
  );
}

export function removeQueryStringFromURL(url: string) {
  const extensions = ['.png', '.jpg', '.jpeg'];

  for (const ext of extensions) {
    const indexOfExt = url.indexOf(ext);
    if (indexOfExt !== -1) {
      return url.substring(0, indexOfExt + ext.length);
    }
  }

  return url;
}

export function truncateString(str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + '...';
  } else {
    return str;
  }
}
