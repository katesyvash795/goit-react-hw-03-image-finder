import React from 'react';
import { GalleryItem } from './ImageGalleryItem.style'; // Импортируйте ваш стайл-компонент

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <GalleryItem>
      <img
        src={image.webformatURL}
        alt={image.id}
        onClick={() => onClick(image)}
      />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
