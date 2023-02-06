import Deck from "./Deck"
import CurrentScore from "./CurrentScore";
import HighScore from "./HighScore";

function MemoryGame(props) {
    return (
        <div className="MemoryGame">
            <Deck
                imgSrcList={
                    props.imgSrcList
                }
            />
            <CurrentScore/>
            <HighScore/>
        </div>
    );
}

export default MemoryGame;
