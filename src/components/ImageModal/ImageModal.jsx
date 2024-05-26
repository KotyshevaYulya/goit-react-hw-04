import css from "./ImageModal.module.css"
import Modal from 'react-modal';
Modal.setAppElement("#root");

const customStyles = {
  content: {
    padding: '0',
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)"
    },
};

export default function ImageModal({showModal, closeModal, currentUrl, currentAlt}) {
    return (
        <>
            {showModal && <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <img src={currentUrl} alt={currentAlt} className={css.modalImg}/>
            </Modal>}
        </>
    )
};