import "./Loader.css"

const Loader = () => {

    const skeletons = [];

    for(let i = 0; i < 6; i++){
        skeletons.push(
            <div className="imageCard" key={i}>
                <div className="imageContainer skeleton"></div>

                <div className="tagsWrapper">
                    <div className="textSkeleton skeleton"></div>
                    <div className="textSkeleton skeleton"></div>
                    <div className="textSkeleton skeleton"></div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="imageCardWrapper">
            {skeletons}
        </div>
    )
}

export default Loader;