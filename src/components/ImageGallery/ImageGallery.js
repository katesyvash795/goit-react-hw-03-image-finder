import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.style';
const ImageGallery = ({ images, onImageClick }) => {
  return (
    <List className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={() => onImageClick(image)}
        />
      ))}
    </List>
  );
};

export default ImageGallery;
