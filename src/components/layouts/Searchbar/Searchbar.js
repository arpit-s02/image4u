import {ReactComponent as SearchIcon} from "../../../assets/searchnormal1.svg"
import "./Searchbar.css"

const Searchbar = () => {
    return (
        <div className="searchbar" tabIndex="0">
            <SearchIcon className="searchIcon"/>

            <div className="verticalLine"></div>

            <input className="searchInput" placeholder="Search"/>
            
            <button className="searchButton">GO!</button>
        </div>
    )
}

export default Searchbar;