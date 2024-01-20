import { useState } from "react";
import DownloadBarsWrapper from "../DownloadBarsWrapper/DownloadBarsWrapper";
import "./DownloadWrapper.css";

const DownloadWrapper = ({imageData}) => {

    const [downloadLink, setDownloadLink] = useState(imageData.previewURL);

    return (
        <div className="downloadWrapper">
            <header>Download</header>

            <DownloadBarsWrapper
                imageData={imageData}
                setDownloadLink={setDownloadLink}
            />

            <a href={downloadLink} target="blank" className="downloadButton" download>Download for free!</a>
        </div>
    )
}

export default DownloadWrapper;