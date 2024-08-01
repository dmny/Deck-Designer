import { ChangeEvent } from "react";
import ColorPicker from "./ColorPicker";
import "./AddText.scss";

interface AddTextProps {
  deckAttributes: {
    deckColor: string;
    deckWidth: string;
  };
  deckText: string;
  deckTextColor: string;
  handleChange: (value: string, targetAttribute: string) => void;
  handleTextChange(e: ChangeEvent<HTMLInputElement>): void;
  handleTextColorChange: (hex: string) => void;
}

export default function DeckText(props: AddTextProps) {
  return (
    <div className="deck-text-container">
      <div className="deck-text">
        <label htmlFor="deckText">Express Yourself!</label>
        <input
          id="deckText"
          type="text"
          className="form-control"
          placeholder={props.deckText}
          name="deckText"
          value={props.deckText}
          onChange={(e) => props.handleTextChange(e)}
        />
      </div>
      <ColorPicker
        handleTextColorChange={props.handleTextColorChange}
        deckTextColor={props.deckTextColor}
      />
    </div>
  );
}
