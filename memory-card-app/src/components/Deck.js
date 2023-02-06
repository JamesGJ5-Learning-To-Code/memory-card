import { useState } from "react";
import Card from "./Card";
import "./Deck.css";

function Deck(props) {
    const [imagesInOrder, setImagesInOrder] = useState(props.imagesInOrder);

    const makeCard = (key, imgSrc) => {
        return <Card
            key={key}
            imgSrc={imgSrc}
        />
    };
    const makeCardList = () => {
        const cardList = [];
        const imagesInOrder = props.imagesInOrder;
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
