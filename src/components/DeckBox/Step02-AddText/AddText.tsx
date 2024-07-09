import ColorPicker from './ColorPicker';
import './AddText.scss';

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
          onChange={ (e) => props.handleTextChange(e) }
        />
      </div>
      <ColorPicker
        handleTextColorChange={ props.handleTextColorChange }
        deckTextColor={ props.deckTextColor }
      />
    </div>
  );
};