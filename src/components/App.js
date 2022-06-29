import { useEffect, useState } from "react";
import Favorites from "./Favorites";
import Header from "./Header";
import apiCards from "../utils/CardsApi";
import { MAX_SCREEN, MIN_SCREEN} from '../constants/constants';
import Popup from "./Popup";


function App() {
    const [cards, setCards] = useState([]);

    const [column1, setColumn1] = useState([]);
    const [column2, setColumn2] = useState([]);
    const [column3, setColumn3] = useState([]);

    const [isFindPopup, setIsFindPopup] = useState(false);
    const [isHistoryPopup, setIsHistoryPopup] = useState(false);

    function handleFindClick(){
        setIsFindPopup(!isFindPopup);
        setIsHistoryPopup(false);
    }

    function handleHistoryClick(){
        setIsHistoryPopup(!isHistoryPopup);
        setIsFindPopup(false);
    }

    function handleFavClick(){
        setIsHistoryPopup(false);
        setIsFindPopup(false);
    }

    function handleResize() {

        const localCards = JSON.parse(localStorage.getItem("cards"));

        
        const windowSize = window.innerWidth;
        if (windowSize >= MAX_SCREEN) {
            setColumn1(localCards.slice(0, localCards.length / 3));
            setColumn2(localCards.slice(localCards.length / 3 + 1, localCards.length / 3 * 2));
            setColumn3(localCards.slice(localCards.length / 3 * 2 + 1));
            // console.log('l');
        } else if (windowSize < MAX_SCREEN && windowSize >= MIN_SCREEN) {
            setColumn1(localCards.slice(0, localCards.length / 2));
            setColumn2(localCards.slice(localCards.length / 2 + 1));
            setColumn3([]);
            // console.log('mid');
            
        } else if (windowSize < MIN_SCREEN) {
            setColumn1(localCards)
            setColumn2([]);
            setColumn3([]);
            // console.log('small');
        }
    }

    useEffect(() => {
        
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        
    }, [column1, column2, column3]);
    

  useEffect(() => {
    apiCards.getInitialCards()
      .then((data) => {
        setCards(data);
        localStorage.setItem("cards", JSON.stringify(data));
        // console.log('get');
      })
  }, [])

  useEffect(() => {
    handleResize();
  }, [cards]);


  return (
    <>
      <Header onFind={handleFindClick} onHistory={handleHistoryClick} onFav={handleFavClick}/>
      {
        (isFindPopup || isHistoryPopup) ? (
          <Popup boolFind={isFindPopup} boolHistory={isHistoryPopup}/>
        ) : ''
      }
      <Favorites column1={ column1 } column2={ column2 } column3={ column3 }/>
    </>
  );
}

export default App;
