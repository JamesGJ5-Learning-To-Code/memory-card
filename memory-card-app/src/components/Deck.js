import { useState } from "react";
import Card from "./Card";
import "./Deck.css";

function Deck(props) {
    const [imagesInOrder, setImagesInOrder] = useState(props.imagesInOrder);

    const randomiseImagesOrder = () => {
        const newImagesInOrder = JSON.parse(JSON.stringify(imagesInOrder));
        newImagesInOrder.sort((a, b) => 0.5 - Math.random());
        setImagesInOrder(newImagesInOrder);
    };
    const makeCard = (key, imgSrc) => {
        return <Card
            key={key}
            imgSrc={imgSrc}
            onImgClick={randomiseImagesOrder}
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
