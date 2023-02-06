import Deck from "./Deck"
import CurrentScore from "./CurrentScore";
import HighScore from "./HighScore";

function MemoryGame(props) {
    return (
        <div className="MemoryGame">
            <HighScore/>
            <CurrentScore/>
            <Deck
                imgSrcList={
                    props.imgSrcList
                }
            />
        </div>
    );
}

export default MemoryGame;
