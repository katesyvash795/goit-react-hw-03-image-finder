import { Component } from 'react';
import Modal from 'react-modal';
import { ModalWrapper, ModalContent } from './Modal.styles';

class MyModal extends Component {
  render() {
    const { isOpen, onClose, imageURL } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Modal"
        ariaHideApp={false}
        style={{
          overlay: {
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
          content: {
            position: 'relative',
            top: 'auto',
            left: 'auto',
            right: 'auto',
            bottom: 'auto',
            border: 'none',
            background: 'none',
            padding: 0,
          },
        }}
      >
        <ModalWrapper>
          <ModalContent>
            <img src={imageURL} />
            <button onClick={onClose}>Закрыть</button>
          </ModalContent>
        </ModalWrapper>
      </Modal>
    );
  }
}

export default MyModal;
