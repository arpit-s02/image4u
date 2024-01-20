import "./InformationWrapper.css";

const InformationWrapper = ({imageData}) => {

    const {user_id, user, type, views, downloads, likes} = imageData;

    const imageDetails = [
        {
            id: 1,
            'key': 'user',
            'value': user
        },
        {
            id: 2,
            'key': 'user ID',
            'value': user_id
        },
        {
            id: 3,
            'key': 'type',
            'value': type
        },
        {
            id: 4,
            'key': 'views',
            'value': views
        },
        {
            id: 5,
            'key': 'downloads',
            'value': downloads
        },
        {
            id: 6,
            'key': 'likes',
            'value': likes
        },
    ]

    return (
        <div className="informationWrapper">
            <h3>Information</h3>

            <div className="information">
                {imageDetails.map((item) => {
                    return (
                        <div key={item.id}>
                            <p className="infoKey">{item.key}</p>
                            <p className="infoValue">{item.value}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default InformationWrapper;