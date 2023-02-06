import Deck from "./Deck"
import CurrentScore from "./CurrentScore";
import HighScore from "./HighScore";

function MemoryGame(props) {
    return (
        <div className="MemoryGame">
            <HighScore/>
            <CurrentScore/>
            <Deck
                imagesInOrder={
                    props.imagesInOrder
                }
            />
        </div>
    );
}

export default MemoryGame;
