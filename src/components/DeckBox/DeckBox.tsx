import { ReactFitty } from 'react-fitty';
import BoltHoles from './BoltHoles'
import ColorSize from './Step01-ColorAndSize/ColorSize';
import DeckText from './Step02-Text/DeckText';
import AddStickers from './Step03-Stickers/AddStickers'

export default function DeckBox(props: any) {
  
  const PageDisplay = () => {
    if (props.page === 1) {
      return <ColorSize deckWidth={ props.deckWidth } deckColor={ props.deckColor } handleChange={ props.handleChange }/>;
    } else if (props.page === 2) {
      return <DeckText handleCopyChange={ props.handleCopyChange } deckText={ props.deckText1 } deckText2={ props.deckText2 } textColor={ props.textColor} handleTextColorChange={ props.handleTextColorChange }/>;
    } else if (props.page === 3) {
      return <AddStickers />;
    }
  };

  return (
    <div className="deck-box-wrapper">
      <div className="deckbox">
        { (props.textInit || props.page >=2) && (
          <div className="text-box">
            <div style={{ height: 220, color: props.textColor }}>
              <ReactFitty maxSize={270} minSize={15}>{ props.deckText }</ReactFitty>
            </div>
          </div> 
        )}
        <img className="deckImage" src={ props.deckColor } alt="" />
        <div className="gradient-overlay-dark"></div>
        <div className="gradient-overlay-light"></div>
        <BoltHoles />
        { props.page == 1 && (
          <div className="width-text noselect"><p>Width: { props.deckWidth }</p></div>
        )}
      </div>
      { PageDisplay() }
    </div>
  ) 
}


