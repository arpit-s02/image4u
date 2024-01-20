import DownloadWrapper from "../DownloadWrapper/DownloadWrapper";
import InformationWrapper from "../InformationWrapper/InformationWrapper";
import TagsWrapper from "../TagsWrapper/TagsWrapper"
import "./ModalContent.css";

const ModalContent = ({imageData, tags}) => {

    const {user, webformatURL: image} = imageData;

    return (
        <div className="modalContent">
            <div className="modalDetails">
                <div className="modalImageContainer">
                    <img src = {image} alt = {user}/>
                </div>
                
                <div>
                    <DownloadWrapper 
                        imageData={imageData}
                    />

                    <InformationWrapper 
                        imageData={imageData}
                    />
                </div>
            </div>

            <div className="modalFooter">
                <p>Tags:</p>
                
                <TagsWrapper 
                    tags={tags}
                />
            </div>
        </div>
    )
}

export default ModalContent;