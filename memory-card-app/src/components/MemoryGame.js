import { useEffect, useState } from "react";
import getDeepCopy from "../refactoredFunctions/getDeepCopy";
import Deck from "./Deck"
import CurrentScore from "./CurrentScore";
import HighScore from "./HighScore";

function MemoryGame(props) {
    const [imagesClickedThisRound, setImagesClickedThisRound] = useState(props.imagesClickedThisRound);
    const [highScore, setHighScore] = useState(props.highScore);

    const processPlayerChoice = (imgSrc) => {
        // TODO: consider replacing below with ternary operator assignment, 
        // using concat method in the falsy case
        let newImagesClickedThisRound;
        if (imagesClickedThisRound.includes(imgSrc)) {
            newImagesClickedThisRound = [];
        } else {
            newImagesClickedThisRound = getDeepCopy(imagesClickedThisRound);
            newImagesClickedThisRound.push(imgSrc);
        }
        setImagesClickedThisRound(newImagesClickedThisRound);
    };
    return (
        <div className="MemoryGame">
            <HighScore
                score={highScore}
            />
            <CurrentScore
                score={imagesClickedThisRound.length}
            />
            <Deck
                imagesInOrder={
                    props.imagesInOrder
                }
                onCardImgClick={
                    processPlayerChoice
                }
            />
        </div>
    );
}

export default MemoryGame;
