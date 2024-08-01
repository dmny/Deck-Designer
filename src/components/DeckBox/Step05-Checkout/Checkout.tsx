import "./Checkout.scss";

type CheckoutProps = {
  cartItems: {
    bearings: boolean;
    stickers: boolean;
    trucks: boolean;
    wheels: boolean;
  };
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
};

export default function Checkout(props: CheckoutProps) {
  return (
    <div className="checkout-container">
      <div>Deck width: {props.deckAttributes.deckWidth}</div>
      <div>Deck color: {props.deckAttributes.deckColor}</div>
      <hr></hr>
      {props.cartItems.trucks && (
        <div>{`Trucks: ${props.deckAttributes.truckBrand}`}</div>
      )}

      <div>Deck text: {props.deckText}</div>
      <div>Deck text color: {props.deckTextColor}</div>
    </div>
  );
}
