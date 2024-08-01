import { ReactFitty } from "react-fitty";
import BoltHoles from "./BoltHoles";
import AddColorSize from "./Step01-ColorAndSize/ColorSize";
import AddText from "./Step02-AddText/AddText";
import AddStickers from "./Step03-Stickers/AddStickers";
import AddAccessories from "./Step04-Accessories/AddAccessories";
import { ChangeEvent } from "react";
// import { DeckAttributesProps } from "../../DeckAttributesInterface";
import "./DeckBox.scss";

interface DeckBoxProps {
  deckAttributes: {
    deckColor: string;
    deckWidth: string;
    truckBrand: string;
    truckWidth: string;
  };
  deckText: string;
  deckTextColor: string;
  page: number;
  textInit: boolean;
  handlePage(arg0: (currPage: number) => number): unknown;
  handleTextChange(e: ChangeEvent<HTMLInputElement>): void;
  handleTextColorChange: (hex: string) => void;
  handleCartChange(cartItem: string): void;
  handleChange: (value: string, targetAttribute: string) => void;
}

export default function DeckBox(props: DeckBoxProps) {
  const PageDisplay = () => {
    switch (props.page) {
      case 1:
        return (
          <AddColorSize
            deckAttributes={props.deckAttributes}
            handleChange={props.handleChange}
          />
        );
      case 2:
        return (
          <AddText
            deckAttributes={props.deckAttributes}
            deckText={props.deckText}
            deckTextColor={props.deckTextColor}
            handleTextChange={props.handleTextChange}
            handleChange={props.handleChange}
            handleTextColorChange={props.handleTextColorChange}
          />
        );
      case 3:
        return <AddStickers />;
      case 4:
        return (
          <AddAccessories
            deckAttributes={props.deckAttributes}
            handleChange={props.handleChange}
            handleCartChange={props.handleCartChange}
          />
        );
    }
  };
  return (
    <div className="deck-box-wrapper">
      <div className="deck-box-wrapper2">
        <div className="deckbox">
          <img
            className="deckImage"
            src={props.deckAttributes.deckColor}
            alt=""
          />
          <div className="gradient-overlay-dark"></div>
          <div className="gradient-overlay-light"></div>
          <BoltHoles />
          {props.page == 1 && (
            <div className="width-text noselect">
              <p>Width: {props.deckAttributes.deckWidth}</p>
            </div>
          )}
          {(props.textInit || props.page >= 2) && (
            <div className="text-box">
              <div
                style={{
                  height: 220,
                  color: props.deckTextColor,
                  fontFamily: "Inter Tight",
                  fontWeight: 900,
                }}
              >
                <ReactFitty maxSize={280} minSize={15}>
                  {props.deckText}
                </ReactFitty>
              </div>
            </div>
          )}
        </div>
      </div>
      {PageDisplay()}
    </div>
  );
}
