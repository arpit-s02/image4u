import { useState } from "react";
import DownloadBar from "../DownloadBar/DownloadBar";
import "./DownloadBarsWrapper.css"

const DownloadBarsWrapper = ({imageData, setDownloadLink}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const data = [
        {
            size: 'Small',
            resolution: `${imageData.previewWidth}x${imageData.previewHeight}`,
            url: imageData.previewURL
        },
        {
            size: 'Medium',
            resolution: `${imageData.webformatWidth}x${imageData.webformatHeight}`,
            url: imageData.webformatURL
        },
        {
            size: 'Large',
            resolution: `${imageData.imageWidth}x${imageData.imageHeight}`,
            url: imageData.largeImageURL
        },
    ]

    const handleChange = (index, url) => {
        setActiveIndex(index);
        setDownloadLink(url);
    }

    return(
        <div className="downloadBarsWrapper">
            {data.map((item, index) => {
                return(
                    <DownloadBar
                        size={item.size}
                        resolution={item.resolution}
                        selectBar={() => handleChange(index, item.url)}
                        isActive={index === activeIndex ? true : false}
                    />
                )
            })}
        </div>
    )
}

export default DownloadBarsWrapper;