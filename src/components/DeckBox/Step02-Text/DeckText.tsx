import ColorPicker from './ColorPicker';

export default function DeckText(props: any) {
  return (
    <div className="deck-text-container">
      <div className="deck-text">
        <label htmlFor="deckText">Express Yourself!</label>
        <input 
          id="deckText"
          type="text"
          className="form-control"
          placeholder={ props.deckText }
          name="deckText"
          value={ props.deckText }
          onChange={ (e) => props.handleCopyChange(e) }
          // When second text field is added
          // onChange={ (e) => props.handleCopyChange("deckText", e) }
        />
      </div>
      <ColorPicker handleTextColorChange={ props.handleTextColorChange } deckTextColor={ props.deckTextColor } />
    </div>
  );
};