import MemoryGame from "./components/MemoryGame";
// TODO: see if you can import the below as a list or 
// something, using a client-side solution (so fs may 
// not work)
// TODO: see if you can figure out how to make the 
// images appear on the page more quickly
import photo1 from "./images/photo1.jpg";
import photo2 from "./images/photo2.jpg";
import photo3 from "./images/photo3.jpg";
import photo4 from "./images/photo4.jpg";
import photo5 from "./images/photo5.jpg";
import photo6 from "./images/photo6.jpg";
import photo7 from "./images/photo7.jpg";
import photo8 from "./images/photo8.jpg";
import photo9 from "./images/photo9.jpg";
import photo10 from "./images/photo10.jpg";
import photo11 from "./images/photo11.jpg";
import photo12 from "./images/photo12.jpg";

function App() {
  return (
    <div className="App">
      <MemoryGame
        imagesInOrder={
          [
            photo1,
            photo2,
            photo3,
            photo4,
            photo5,
            photo6,
            photo7,
            photo8,
            photo9,
            photo10,
            photo11,
            photo12,
          ]
        }
        imagesClickedThisRound={
          new Set()
        }
        highScore="0"
      />
    </div>
  );
}

export default App;
