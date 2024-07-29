

import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
    >
      <button onClick={onRequestClose}>Close</button>
      {image && <img src={image.urls.regular} alt={image.alt_description} />}
    </Modal>
  );
};

export default ImageModal;
