import DropDown from "../../dropDown";
import colorData from "../../../data/colorData";
import widthData from "../../../data/widthData";
// import { DeckAttributesProps } from "../../../DeckAttributesInterface";

interface ColorSizeProps {
  deckAttributes: {
    deckColor: string;
    deckWidth: string;
  };
  handleChange: (value: string, targetAttribute: string) => void;
}

export default function ColorSize(props: ColorSizeProps) {
  return (
    <div className="options">
      <span>
        <p>What color deck?</p>
        <DropDown
          options={colorData}
          selected={props.deckAttributes.deckColor}
          handleChange={props.handleChange}
          targetAttribute="deckColor"
          targetElement={""}
        />
      </span>
      <span>
        <p>What size deck?</p>
        <DropDown
          options={widthData}
          selected={props.deckAttributes.deckWidth}
          handleChange={props.handleChange}
          targetAttribute="deckWidth"
          targetElement={""}
        />
      </span>
    </div>
  );
}
