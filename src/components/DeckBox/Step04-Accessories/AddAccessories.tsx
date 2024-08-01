import AddAccessory from "./AddAccessory";
import "./addAccessories.scss";

interface AddAccessoriesProps {
  deckAttributes: {
    deckWidth: string;
    truckBrand: string;
    truckWidth: string;
  };
  handleChange: (value: string, targetAttribute: string) => void;
  handleCartChange(cartItem: string): void;
}

export default function AddAccessories(props: AddAccessoriesProps) {
  return (
    <div className="add-accessories">
      <div className="options">
        <AddAccessory
          deckAttributes={props.deckAttributes}
          handleChange={props.handleChange}
          handleCartChange={props.handleCartChange}
        />
      </div>
    </div>
  );
}
