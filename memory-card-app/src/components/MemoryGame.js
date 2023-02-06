import Deck from "./Deck"
import CurrentScore from "./CurrentScore";

function MemoryGame(props) {
    return (
        <div className="MemoryGame">
            <Deck
                imgSrcList={
                    props.imgSrcList
                }
            />
            <CurrentScore/>
        </div>
    );
}

export default MemoryGame;
