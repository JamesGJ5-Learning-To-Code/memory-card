import "./Card.css";

function Card(props) {
    const imgSrc = props.imgSrc;
    const onImgClick = props.onImgClick;
    return (
        <div className="Card">
            {/* TODO: The src is passed to alt as well so people who cannot see 
            can try to remember the links they have chosen; however, should 
            replace each alt with a description specific to the image.*/}
            <img
                src={imgSrc}
                alt={imgSrc}
                onClick={() => {
                        onImgClick.shuffleDeck();
                        onImgClick.processPlayerChoice(imgSrc);
                    }
                }
            />
        </div>
    )
}

export default Card;
