import { fetchItems } from 'api/api';
import SearchBar from './Searchbar/Searchbar';
import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    items: [],
    value: '',
    page: 1,
    loader: false,
    showBtn: false,
    modal: {
      isActive: false,
      largeImg: '',
      tag: '',
    },
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.value !== this.state.value ||
      this.state.page !== prevState.page
    ) {
      this.setState({ loader: true });
      try {
        const items = await fetchItems(this.state.value, this.state.page);
        this.setState(prevState => {
          return {
            items: [...prevState.items, ...items.hits],
            showBtn: this.state.page < Math.ceil(items.totalHits / 20),
          };
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loader: false });
      }
    }
  }

  handleSubmit = value => {
    this.setState({ value, page: 1, items: [] });
  };

  handleClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleZoom = (url, tag) => {
    this.setState({
      modal: {
        isActive: true,
        largeImg: url,
        tag: tag,
      },
    });
  };

  handleCloseModal = e => {
    this.setState({
      modal: {
        isActive: false,
        largeImg: '',
        tag: '',
      },
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery items={this.state.items} handleZoom={this.handleZoom} />
        {this.state.loader && <Loader />}
        {this.state.showBtn && <Button onClick={this.handleClick} />}
        {this.state.modal.isActive && (
          <Modal
            largeImg={this.state.modal.largeImg}
            tag={this.state.modal.tag}
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}
