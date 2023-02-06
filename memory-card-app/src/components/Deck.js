import { useState } from "react";
import Card from "./Card";
import "./Deck.css";

function Deck(props) {
    const [imagesInOrder, setImagesInOrder] = useState(props.imagesInOrder);

    // TODO: extract getDeepCopy and randomiseInPlace into their own functions
    const getDeepCopy = (copiedObject) => {
        return JSON.parse(JSON.stringify(copiedObject));
    }
    const randomiseInPlace = (arr) => {
        arr.sort((a, b) => 0.5 - Math.random())
    }
    const shuffleDeck = () => {
        const newImagesInOrder = getDeepCopy(imagesInOrder);
        randomiseInPlace(newImagesInOrder);
        setImagesInOrder(newImagesInOrder);
    };
    const makeCard = (key, imgSrc) => {
        return <Card
            key={key}
            imgSrc={imgSrc}
            onImgClick={shuffleDeck}
        />
    };
    const makeCardList = () => {
        const cardList = [];
        for (let i = 0; i < imagesInOrder.length; i += 1) {
            cardList.push(makeCard(i, imagesInOrder[i]));
        }
        return cardList;
    };
    return (
        <div className="Deck">
            {makeCardList()}
        </div>
    );
}

export default Deck;
