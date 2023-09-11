import { Component } from 'react';
import { fetchImages } from './api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    query: '',
    images: [],
    showModal: false,
    selectedImage: null,
    page: 1,
    isLoading: false,
    selectedImageURL: '',
    loader: false,
    totalHits: 0, // Добавляем totalHits в начальное состояние
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.setState({ loader: true });
      try {
        const data = await fetchImages(this.state.query, this.state.page);
        const { hits, totalHits } = data; // Извлекаем hits и totalHits из ответа API
        this.setState((prevState) => {
          return {
            images: [...prevState.images, ...hits],
            totalHits, // Обновляем totalHits
          };
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loader: false });
      }
    }
  }

  handleSearchInputChange = (query) => {
    this.setState({ query, images: [], page: 1 });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  loadMoreImages = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };
  

  handleImageClick = (image) => {
    this.setState({ showModal: true, selectedImageURL: image.largeImageURL });
  };

  render() {
    const { images, showModal, selectedImageURL, isLoading, loader, totalHits } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchInputChange} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loader && <Loader />}
        {images.length > 0 && images.length < totalHits && (
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
