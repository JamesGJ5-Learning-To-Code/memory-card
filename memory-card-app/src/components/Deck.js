import Card from "./Card";
import "./Deck.css";

function Deck(props) {
    const makeCard = (key, imgSrc) => {
        return <Card
            key={key}
            imgSrc={imgSrc}
        />
    };
    const makeCardList = () => {
        const cardList = [];
        const imgSrcList = props.imgSrcList;
        for (let i = 0; i < imgSrcList.length; i += 1) {
            cardList.push(makeCard(i, imgSrcList[i]));
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
