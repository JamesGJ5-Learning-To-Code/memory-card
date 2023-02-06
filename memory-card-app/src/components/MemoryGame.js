import { useState } from "react";
import Deck from "./Deck"
import CurrentScore from "./CurrentScore";
import HighScore from "./HighScore";

function MemoryGame(props) {
    const [imagesClickedThisRound, setImagesClickedThisRound] = useState(props.imagesClickedThisRound);

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
