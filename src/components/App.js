import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

import axios from 'axios';

class App extends Component {
  state = {
    query: '',
    images: [],
    showModal: false,
    selectedImage: null,
    page: 1,
    isLoading: false,
    selectedImageURL: '',
  };

  BASE_URL = 'https://pixabay.com/api/';
  API_KEY = '38424207-c86d4b463b0395cac7359a6bf';

  fetchImages = () => {
    const { query, page } = this.state;
    const URL = `${this.BASE_URL}?q=${query}&page=${page}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    axios
      .get(URL)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => console.error('Error fetching data:', error))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearchInputChange = query => {
    this.setState({ query, images: [], page: 1 }, this.fetchImages);
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  loadMoreImages = () => {
    this.fetchImages();
  };
  handleImageClick = image => {
    this.setState({ showModal: true, selectedImageURL: image.largeImageURL });
  };

  render() {
    const { images, showModal, selectedImageURL, isLoading } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchInputChange} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && (
          <Button onClick={this.loadMoreImages} show={!isLoading} />
        )}
        {showModal && selectedImageURL && (
          <Modal
            isOpen={showModal}
            imageURL={selectedImageURL}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
