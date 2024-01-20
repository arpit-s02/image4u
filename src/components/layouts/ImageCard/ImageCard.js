import { useState } from "react";
import "./ImageCard.css"
import Modal from "../Modal/Modal";
import TagsWrapper from "../TagsWrapper/TagsWrapper";

const ImageCard = ({imageData}) => {

    const [showModal, setShowModal] = useState(false);
    const {tags, webformatURL: image, user} = imageData;
    const tagsArray = tags.split(", ");

    return (
        <>
            <div className="imageCard">
                <div className="imageContainer" onClick = {() => setShowModal(true)}>
                    <img src = {image} alt = {user} />
                </div>

                <TagsWrapper 
                    tags = {tagsArray}
                />
            </div>
            
            {showModal && (
                <Modal 
                    imageData={imageData}
                    setShowModal={setShowModal}
                    tags={tagsArray}
                />
            )}
        </>
    )   
}

export default ImageCard;