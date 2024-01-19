import {ReactComponent as CloseIcon} from "../../../assets/close.svg"
import "./Modal.css"

const Modal = ({imageData, setShowModal}) => {

    const {user_id, user, webformatURL: image, type, views, downloads, likes} = imageData;

    const imageDetails = [
        {
            id: 1,
            'key': 'user',
            'value': user
        },
        {
            id: 2,
            'key': 'user_id',
            'value': user_id
        },
        {
            id: 3,
            'key': 'type',
            'value': type
        },
        {
            id: 4,
            'key': 'views',
            'value': views
        },
        {
            id: 5,
            'key': 'downloads',
            'value': downloads
        },
        {
            id: 6,
            'key': 'likes',
            'value': likes
        },
    ]

    return (
        <div className="modal">
            <div className="imagePreview">
                <div className="modalHeader">
                    <p>Preview ID: {user_id}</p>
                    <CloseIcon 
                        className="closeIcon" 
                        onClick = {() => setShowModal(false)}
                    />
                </div>

                <div className="imageInfoContainer">
                    <div className="imageContainer">
                        <img src = {image} alt = {user}/>
                    </div>

                    <div className="infoContainer">
                        <div className="info">
                            <h3>Information</h3>
                            <div className="imageDetails">
                                {imageDetails.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            <p className="infoKey">{item.key}</p>
                                            <p className="infoValue">{item.value}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;