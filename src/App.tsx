import { useState } from 'react';
import StepData from './data/stepData';
import DeckBox from './components/DeckBox/DeckBox';
import Checkout from './components/DeckBox/Step05-Checkout/Checkout';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css'

export default function Home() {  
  const stepHeader = StepData.map( steps => steps.header );

  const [ page, setPage ] = useState(4);
  function handlePage (value: number) {
    setPage(value);
  }

  const [ cartItems, setCartItems ] = useState({
    stickers: false,
    trucks: false,
    wheels: false,
    bearings: false,
  })

  function handleCartChange(value: string, attribute: string) {
    setCartItems({
      ...cartItems,
      [attribute]: value
    });
  }

  const [ deckAttributes, setDeckAttributes ] = useState({
      deckColor: "NaturalDeck.jpg",
      deckWidth: "8.25",
      truckBrand: null,
      truckWidth: null,
      wheelBrand: null,
      wheelWidth: null,
  });

  function handleChange( value: string, attribute: string ) {
    setDeckAttributes({
      ...deckAttributes,
      [attribute]: value
    });
  };

  const [ deckTextColor, setDeckTextColor ] = useState("#000");
  function handleTextColorChange( value: string ) {
    setDeckTextColor(value);
  };

  const [ textInit, setTextInit ] = useState( false );
  const [ deckText, setDeckText ] = useState( "YOUR TEXT HERE!" );
  function handleTextChange( e: React.ChangeEvent<HTMLInputElement> ) {
    !textInit && setTextInit( true );
    setDeckText( e.target.value );
  };

  return (
    <div className="config-container">
      <Header page={ page } steps={ StepData } stepHeader={ stepHeader } />
      { page <= 4 && (
        <DeckBox
          page={ page }
          deckAttributes={ deckAttributes }
          textInit={ textInit }
          deckText={ deckText }
          deckTextColor={ deckTextColor }
          handleChange={ handleChange }
          handleTextChange={ handleTextChange }
          handleCartChange={ handleCartChange }
          handleTextColorChange={ handleTextColorChange }
        />
      )}
      { page >= 5 && (
        <Checkout
          deckAttributes={ deckAttributes }
          deckText={ deckText }
          deckTextColor={ deckTextColor }
          carttItems={ cartItems }
        />
      )}
      <Footer
        page={ page }
        steps={ StepData }
        handlePage={ handlePage }
      />
    </div>
  )
}