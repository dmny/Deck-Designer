import truckData from "../../../data/truckData";
import DropDown from "../../dropDown";
// import { DeckAttributesProps } from "../../../DeckAttributesInterface";
import "./AddAccessory.scss";

type Widths = {
  label: string;
  value: string;
};

interface AddAccessoryProps {
  deckAttributes: {
    deckWidth: string;
    truckBrand: string;
    truckWidth: string;
  };
  handleChange: (value: string, targetAttribute: string) => void;
  handleCartChange(cartItem: string): void;
}

export default function AddAccessory(props: AddAccessoryProps) {
  // Get array of Truck brands from data file.
  let brands = truckData.slice(1).map((item) => {
    return { label: item.brand };
  });

  // let choice: string = props.deckAttributes.truckBrand;
  const truckChoice = truckData.filter((obj) => {
    return obj.brand === props.deckAttributes.truckBrand;
  });

  const truckWidths = truckChoice.map((obj) => obj.widths);

  const widths: Widths[] = truckWidths[0]!.map((item) => {
    return {
      label: item.manuWidth,
      value: item.actualWidth,
    };
  });

  return (
    <div className="trucks">
      <div className="truckImg">
        <img src={`${props.deckAttributes.truckBrand}.png`} alt="" />
      </div>
      <div className="truck-options">
        <span>
          <p>Truck Brand:</p>
          <DropDown
            options={brands}
            selected={props.deckAttributes.truckBrand}
            handleChange={props.handleChange}
            targetAttribute="truckBrand"
            targetElement={""}
          />
        </span>
        <span>
          <p>Truck Size:</p>
          <DropDown
            options={widths}
            selected={
              !props.deckAttributes.truckWidth
                ? props.deckAttributes.deckWidth
                : props.deckAttributes.truckWidth
            }
            handleChange={props.handleChange}
            targetAttribute="truckWidth"
            targetElement={""}
          />
        </span>
        <span>
          <button
            onClick={() => {
              props.handleCartChange("trucks");
            }}
          >
            Add to cart
          </button>
        </span>
      </div>
    </div>
  );
}
