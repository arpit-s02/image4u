import Navbar from "../Navbar/Navbar"
import Searchbar from "../Searchbar/Searchbar"
import "./Hero.css"

const Hero = ({searchValue}) => {
    return (
        <div className="hero">
            <Navbar />

            <Searchbar 
                placeholder="Start new Search"
            />

            <h3 className="resultHeading">Results: {searchValue}</h3>
        </div>
    )
}

export default Hero;