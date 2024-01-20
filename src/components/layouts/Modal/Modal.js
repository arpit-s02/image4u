import ModalContent from "../ModalContent/ModalContent";
import ModalHeader from "../ModalHeader/ModalHeader";
import "./Modal.css";

const Modal = ({imageData, setShowModal, tags}) => {

    const {user_id} = imageData;

    return (
        <div className="modalContainer">
            <div className="modal">
                <ModalHeader
                    user_id={user_id}
                    setShowModal={setShowModal}
                />

                <ModalContent 
                    imageData={imageData}
                    tags={tags}
                />
            </div>
        </div>
    )
}

export default Modal;