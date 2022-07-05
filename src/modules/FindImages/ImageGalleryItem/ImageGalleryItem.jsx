import PropTypes, { arrayOf } from 'prop-types';

const ImageGalleryItem = ({ items, onClick }) => {
  return ( items.map(({ id, webformatURL, tags,largeImageURL }) => (
    <li className="ImageGalleryItem" key={id} onClick={() => onClick(largeImageURL)}>
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={tags}
      ></img>
    </li>
  )));
};

ImageGalleryItem.propTypes = {
  items: arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, webformatURL: PropTypes.string.isRequired, tags: PropTypes.string.isRequired, largeImageURL: PropTypes.string.isRequired})),
  onClick: PropTypes.func.isRequired
}

export default ImageGalleryItem;
