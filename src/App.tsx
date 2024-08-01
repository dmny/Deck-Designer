import { useState, useEffect, SetStateAction } from "react";
import StepData from "./data/stepData";
import truckData from "./data/truckData";
import wheelData from "./data/wheelData";
import DeckBox from "./components/DeckBox/DeckBox";
import Checkout from "./components/DeckBox/Step05-Checkout/Checkout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

export default function Home() {
  const [page, setPage] = useState(0);
  const [cartItems, setCartItems] = useState({
    stickers: false,
    trucks: false,
    wheels: false,
    bearings: false,
  });

  const [deckAttributes, setDeckAttributes] = useState({
    deckColor: "NaturalDeck.jpg",
    deckWidth: "8.25",
    truckBrand: "",
    truckWidth: "",
    truckPrice: "",
    wheelBrand: "",
    wheelWidth: "",
  });

  const [textInit, setTextInit] = useState(false);
  const [deckTextColor, setDeckTextColor] = useState("#000");
  const [deckText, setDeckText] = useState("YOUR TEXT HERE!");

  const stepHeader = StepData.map((steps) => steps.header);

  function handlePage(value: SetStateAction<number>) {
    setPage(value);
  }

  function handleChange(value: string, attribute: string) {
    setDeckAttributes((prevState) => ({
      ...prevState,
      [attribute]: value,
    }));
  }

  const handleCartChange = (cartItem: string) => {
    setCartItems({
      ...cartItems,
      [cartItem]: !cartItems[cartItem as keyof typeof cartItems],
    });
  };
  function handleTextColorChange(value: string) {
    setDeckTextColor(value);
  }
  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    !textInit && setTextInit(true);
    setDeckText(e.target.value);
  }
  (() => {
    useEffect(() => {
      const accessories = [truckData, wheelData];
      accessories.map((element) => {
        let brands = element.slice(1).map((item) => {
          return { label: item.brand };
        });
        function random(min: number, max: number) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let randomAssignment = brands[random(0, brands.length - 1)].label;
        let attribute = element[0].accessoryCategory;
        attribute = attribute!.substring(0, attribute!.length - 1);
        attribute = `${attribute}Brand`;
        setDeckAttributes((prevState) => ({
          ...prevState,
          [attribute]: randomAssignment,
        }));
      });
    }, []);
  })();
  return (
    <div className="config-container">
      <Header page={page} stepHeader={stepHeader} />
      {page <= 4 && (
        <DeckBox
          page={page}
          deckAttributes={deckAttributes}
          textInit={textInit}
          deckText={deckText}
          deckTextColor={deckTextColor}
          handlePage={handlePage}
          handleChange={handleChange}
          handleTextChange={handleTextChange}
          handleCartChange={handleCartChange}
          handleTextColorChange={handleTextColorChange}
        />
      )}
      {page >= 5 && (
        <Checkout
          deckAttributes={deckAttributes}
          deckText={deckText}
          deckTextColor={deckTextColor}
          cartItems={cartItems}
        />
      )}
      <Footer page={page} stepHeader={stepHeader} handlePage={handlePage} />
    </div>
  );
}
