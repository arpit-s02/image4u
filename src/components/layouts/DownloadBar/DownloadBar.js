import {ReactComponent as CheckIcon} from "../../../assets/check.svg";
import "./DownloadBar.css";

const DownloadBar = ({size, resolution, selectBar, isActive}) => {
  return (
    <div 
        className={isActive ? "downloadBar active" : "downloadBar"}
        onClick={selectBar}
    >
        <p>{size}</p>

        <div>
            <p className="resolution">{resolution}</p>
            
            <CheckIcon className={isActive ? "radioIcon active" : "radioIcon"}/>
        </div>
    </div>
  )
}

export default DownloadBar;