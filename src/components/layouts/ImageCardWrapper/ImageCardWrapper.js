import { useState, useEffect } from "react";
import ImageCard from "../ImageCard/ImageCard"
import config from "../../../config";
import axios from "axios";
import "./ImageCardWrapper.css"
import Loader from "../Loader/Loader";
import { ReactComponent as SadIcon } from "../../../assets/sad.svg";

const ImageCardWrapper = ({searchValue}) => {
    
    const [resultsData, setResultsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getSearchResults = async(searchValue) => {
        try {
            setIsLoading(true);
            const url = config.endpoint
    
            const response = await axios.get(`${url}&q=${searchValue}`);

            return response.data.hits;
            
        } catch (error) {
            console.error(error);
            return [];

        } finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        (async () => {
            const data = await getSearchResults(searchValue);
            setResultsData(data);
        })();
    }, [searchValue]);

    if(isLoading){
        return(
            <Loader />
        )
    }

    return(
        <>
            {resultsData.length ? (
                <div className="imageCardWrapper">
                    {resultsData.map((item) => {
                        return (
                            <ImageCard
                                key={item.id}
                                imageData={item}
                            />
                        )
                    })}
                </div>
            ) : (
                <div className="noResultContainer">
                    <SadIcon />
                    <h3>No Result Found</h3>
                </div>
            )}
        </>
    )
}

export default ImageCardWrapper;