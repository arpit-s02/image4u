import Hero from "../layouts/Hero/Hero";
import ImageCardWrapper from "../layouts/ImageCardWrapper/ImageCardWrapper";
import { useSearchParams } from "react-router-dom";
import "./Results.css"

const Results = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className="results">
            <Hero 
                searchValue={searchParams.get('search')}
            />

            <ImageCardWrapper
                searchValue={searchParams.get('search')}
            />
        </div>
    )
}

export default Results;