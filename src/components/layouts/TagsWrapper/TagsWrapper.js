import "./TagsWrapper.css"

const TagsWrapper = ({tags}) => {
    return (
        <div className="tagsWrapper">
            {tags.map((item) => {
                return (
                    <p key={item}>{item}</p>
                )
            })}
        </div>
    )
}

export default TagsWrapper;