import Deck from "./Deck"

function MemoryGame(props) {
    return (
        <div className="MemoryGame">
            <Deck
                imgSrcList={
                    props.imgSrcList
                }
            />
        </div>
    );
}

export default MemoryGame;
