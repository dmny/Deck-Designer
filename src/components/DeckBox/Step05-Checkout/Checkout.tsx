export default function Checkout( props: any ) {
    return (
      <div>
        <div>Deck width: { props.deckWidth }</div>
        <div>Deck color: { props.deckColor.label }</div>
        <div>Deck text: { props.deckText }</div>
        <div>Deck text color: { props.deckTextColor }</div>
      </div>
    );
  };