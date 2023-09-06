import React, { Component } from 'react';


// Імпортуємо створені компоненти
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

// Імпортуємо Axios для роботи з API
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

  // Перелік констант для налаштувань API
  BASE_URL = 'https://pixabay.com/api/';
 API_KEY = '38424207-c86d4b463b0395cac7359a6bf';

  // Функція для відправлення запиту до API
  fetchImages = () => {
    const { query, page } = this.state;
    const URL = `${this.BASE_URL}?q=${query}&page=${page}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    axios
      .get(URL)
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => console.error('Error fetching data:', error))
      .finally(() => this.setState({ isLoading: false }));
  };

  // Обробник події введення тексту у пошукове поле
  handleSearchInputChange = (query) => {
    this.setState({ query, images: [], page: 1 }, this.fetchImages);
  };

  // Обробник події кліку на елемент галереї
  // handleImageClick = (image) => {
  //   this.setState({ showModal: true, selectedImage: image });
  // };

  // Обробник події закриття модального вікна
  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  // Функція для завантаження наступної порції зображень
  loadMoreImages = () => {
    this.fetchImages();
  };
  handleImageClick = (image) => {
    this.setState({ showModal: true, selectedImageURL: image.largeImageURL });
  };
  
  render() {
    const { images, showModal, selectedImageURL, isLoading } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchInputChange} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && <Button onClick={this.loadMoreImages} show={!isLoading} />}
        {showModal && selectedImageURL && (
  <Modal isOpen={showModal} imageURL={selectedImageURL} onClose={this.handleCloseModal} />
)}
      </div>
    );
  }
}

export default App;