import StepData from '../data/stepData';

import ColorSize from './ColorSize';
import DeckText from './DeckText';

import DeckBox from '../components/DeckBox';
import Footer from '../components/Footer';

import { useState } from 'react';

export default function Home() {  
  const [page, setPage] = useState(0);

  const StepHeader = StepData.map( steps => steps.header );
  
  const [deckColor, setDeckColor] = useState("/NaturalDeck.jpg");
  const [textColor, setTextColor] = useState("#000");
  const [deckWidth, setDeckWidth] = useState("8.0 in");
  const [deckText1, setDeckText1] = useState("⬇YOUR TEXT HERE");
  const [deckText2, setDeckText2] = useState("");

  function handleChange(value: string, trait: string) {
    switch (trait) {
      case 'deckColor':
        setDeckColor(value);
        break;
      case 'deckWidth':
        setDeckWidth(value);
        break;
    };
  };

  function handlePage (value: number) {
    setPage(value);
  }

  function handleTextColorChange(value: string) {
        setTextColor(value);
        // console.log(value);
  };

  function handleCopyChange(field: string, event: InputEvent) {
    const {value} = event.target;
    switch (field) {
      case 'deckText1':
        setDeckText1(value);
        break;
      case 'deckText2':
        setDeckText2(value);
        break;
    }
  }

  const PageDisplay = () => {
    if (page === 1) {
      return <ColorSize deckWidth={ deckWidth } deckColor={ deckColor } handleChange={ handleChange }/>;
   
    } else if (page === 2) {
      return <DeckText handleCopyChange={ handleCopyChange } deckText={ deckText1 } deckText2={ deckText2 } textColor={textColor} handleTextColorChange={ handleTextColorChange }/>;
    } else {
       return <div></div>;
    }
  };

  return (
        <div className="build-container">
          {/* { page !== 0 && ( */}
            <div className="progress">
              <div className="progress-bar noselect" style={{ width: 100 / ( StepData.length - 1 )  * (page) + "%" }}></div>
            </div>
          {/* )} */}
            <div className="header-text">
              <h1>{ StepHeader[page] }</h1>
            </div>

            <DeckBox deckWidth={ deckWidth } deckColor={ deckColor } deckText={ deckText1 } deckText2={ deckText2 } textColor={textColor}  page={ page }/>
            
            { PageDisplay() }
            <div className="footer">
            <Footer page={ page } PageDisplay={ StepData } handlePage={handlePage}/>
            </div>

        </div>
  )
}