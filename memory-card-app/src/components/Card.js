import "./Card.css";

function Card(props) {
    return (
        <div className="Card">
            {/* TODO: The src is passed to alt as well so people who cannot see 
            can try to remember the links they have chosen; however, should 
            replace each alt with a description specific to the image.*/}
            <img
                src={props.imgSrc}
                alt={props.imgSrc}
                onClick={props.onImgClick}
            />
        </div>
    )
}

export default Card;
