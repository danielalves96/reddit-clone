import { fireEvent, render } from '@testing-library/react';
import ImageTopicItem from '.';

describe('ImageTopicItem', () => {
  const setup = () => {
    const utils = render(
      <ImageTopicItem imageSrc="/path/to/image.jpg" text="Test Text" />,
    );
    const listItemImage = utils.getByTestId('list-item-image');
    return {
      listItemImage,
      ...utils,
    };
  };

  it('renders the ImageTopicItem component', () => {
    const { listItemImage } = setup();
    expect(listItemImage).toBeTruthy();
  });

  it('renders the image with the correct source', () => {
    const { getByAltText } = setup();
    const image = getByAltText('Image');
    expect(image).toBeTruthy();
  });

  it('renders the text correctly', () => {
    const { getByText } = setup();
    const text = getByText('Test Text');
    expect(text).toBeTruthy();
  });

  it('calls the testAlert function when clicked', () => {
    const testAlertMock = jest.fn();
    jest.spyOn(global, 'alert').mockImplementation(testAlertMock);

    const { listItemImage } = setup();
    fireEvent.click(listItemImage);
    expect(testAlertMock).toHaveBeenCalledTimes(1);
  });
});
