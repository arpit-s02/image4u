import {ReactComponent as SearchIcon} from "../../../assets/searchnormal1.svg"
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./Searchbar.css";

const Searchbar = ({placeholder}) => {

    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const handleSearch = (event, searchValue) => {
        event.preventDefault();
        searchValue = searchValue.trim();

        if(searchValue){
            navigate(`/results?search=${searchValue}`);
            setSearchValue("");
        }
    }

    return (
        <div className="searchbar" tabIndex="0">
            <SearchIcon className="searchIcon"/>

            <div className="verticalLine"></div>

            <form onSubmit={(e) => handleSearch(e, searchValue)}>
                <input 
                    className="searchInput" 
                    placeholder={placeholder}
                    value = {searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                
                <button className="searchButton">GO!</button>
            </form>
        </div>
    )
}

export default Searchbar;