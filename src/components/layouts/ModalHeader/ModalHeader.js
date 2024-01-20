import {ReactComponent as CloseIcon} from "../../../assets/close.svg";
import "./ModalHeader.css";

const ModalHeader = ({user_id, setShowModal}) => {
    return (
        <div className="modalHeader">
            <p>Preview ID: {user_id}</p>
            
            <CloseIcon 
                className="closeIcon" 
                onClick = {() => setShowModal(false)}
            />
        </div>
    )
}

export default ModalHeader;