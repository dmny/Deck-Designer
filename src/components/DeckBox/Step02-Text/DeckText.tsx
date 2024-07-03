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
          placeholder={ props.deckTest }
          name="deckText"
          value={ props.deckText }
          onChange={ (e) => props.handleCopyChange("deckText1", e) }
        />
      </div>
      <ColorPicker handleTextColorChange={ props.handleTextColorChange } textColor={ props.textColor } />
    </div>
    );
  };