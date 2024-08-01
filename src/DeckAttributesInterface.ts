import { ChangeEvent } from "react";

export interface DeckAttributesProps {
  handlePage(arg0: (currPage: number) => number): unknown;
  handleTextChange(e: ChangeEvent<HTMLInputElement>): void;
  handleTextColorChange: (hex: string) => void;
  handleCartChange(cartItem: string): void;
  handleChange: (value: string, targetAttribute: string) => void;
  deckAttributes: {
    deckColor: string;
    deckWidth: string;
    truckBrand: string;
    truckPrice: string;
    truckWidth: string;
    wheelBrand: string;
    wheelWidth: string;
  };
  deckText: string;
  deckTextColor: string;
  page: number;
  textInit: boolean;
  stepHeader: string[];
  options: object[];
  targetAttribute: string;
  targetElement: string;
  selected: string;
}
