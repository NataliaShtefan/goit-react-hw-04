
import s from "./ImageModal.module.css"
import { IoCloseOutline } from 'react-icons/io5';
import Modal from 'react-modal';
import ImageModalCard from "../ImageModalCard/ImageModalCard";

Modal.setAppElement('#root'); 

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
className={s.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      shouldCloseOnEsc={true}  
    >
      <button className={s.btn} onClick={onRequestClose}><IoCloseOutline className={s.icon}/></button>
      {image && <ImageModalCard image={image} />}
    </Modal>
  );
};

export default ImageModal;
