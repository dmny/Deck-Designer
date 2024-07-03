import { useState } from 'react';
import StepData from './data/stepData';
import DeckBox from './components/DeckBox/DeckBox';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css'

export default function Home() {  
  const stepHeader = StepData.map( steps => steps.header );
  const [page, setPage] = useState(0);
  const [deckColor, setDeckColor] = useState("/NaturalDeck.jpg");
  const [textColor, setTextColor] = useState("#000");
  const [deckWidth, setDeckWidth] = useState("8.0 in");
  const [deckText1, setDeckText1] = useState("YOUR TEXT HERE");
  const [textInit, setTextInit] = useState( false );

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

  function handleCopyChange(field: string, e: React.ChangeEvent<HTMLInputElement>) {
    !textInit && setTextInit(true);
    const value = e.target.value;
    // console.log(event.target);
    switch (field) {
      case 'deckText1':
        setDeckText1(value);
        break;
      case 'deckText2':
        // setDeckText2(value);
        break;
    }
  }
  return (
    <div className="config-container">
        <Header page={ page } steps={ StepData } stepHeader={ stepHeader } />
        <DeckBox
          deckWidth={ deckWidth }
          deckColor={ deckColor }
          deckText={ deckText1 }
          textColor={textColor}
          page={ page }
          textInit={ textInit }
          handleChange={ handleChange }
          handleCopyChange={ handleCopyChange }
          handleTextColorChange={ handleTextColorChange }
        />
        <Footer page={ page } steps={ StepData } handlePage={ handlePage }/>
    </div>
  )
}