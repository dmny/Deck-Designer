import ColorPicker from '../components/ColorPicker';

export default function DeckText(props) {
  
    return (
    <div className="deck-text-container">
      <div className="deck-text">
      <label>Express Yourself!</label>
        <input 
          type="text"
          className="form-control"
          placeholder="Your Text Here"
          name="firstName"
          value={ props.deckText1 }
          onChange={ (event) => props.handleCopyChange("deckText1", event) }
        />
        {/* <input 
          type="text"
          className="form-control"
          placeholder="First Name"
          name="firstName"
          value={ props.deckText2 }
          onChange={ (event) => props.handleCopyChange("deckText2", event) }
        /> */}
      </div>
      <ColorPicker handleTextColorChange={ props.handleTextColorChange } textColor={ props.textColor } />
    </div>
    );
  };