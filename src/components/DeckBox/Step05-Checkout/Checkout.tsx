export default function Checkout( props: any ) {
    return (
      <div>
        <div>Deck width: { props.deckAttributes.deckWidth }</div>
        <div>Deck color: { props.deckAttributes.deckColor }</div>
        <div>Deck text: { props.deckText }</div>
        <div>Deck text color: { props.deckTextColor }</div>
      </div>
    );
  };