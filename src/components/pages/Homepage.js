import Navbar from "../layouts/Navbar/Navbar";
import Searchbar from "../layouts/Searchbar/Searchbar";
import "./Homepage.css"

const Homepage = () => {
    return (
        <div className="homepage">
            <Navbar />

            <h1 className="introHeading">
                Discover over 2,000,000 free Stock Images
            </h1>

            <Searchbar />

            <div className="trendingBar">
                <p><span>Trending:</span> flowers, love, forest, river</p>
            </div>
        </div>
    )
}

export default Homepage;