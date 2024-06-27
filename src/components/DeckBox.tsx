import { ReactFitty } from "react-fitty";
import { useState } from 'react'
import BoltHoles from '../components/BoltHoles'

export default function DeckBox(props: any) {

const [textRows, setTextRows] = useState(false);

  return (
    <div className="deck-box-wrapper">
      <div className="deckbox">
        {/* { console.log( props.page )} */}
        { props.page >= 2 && (
          <div className="text-box">
            <div style={{ height: 220, color: props.textColor }}>
              <ReactFitty maxSize={270} minSize={15}>{ props.deckText }</ReactFitty>
            </div>
          </div> 
        )}
        <img src={ props.deckColor } alt="" />
        <div className="gradient-overlay-dark"></div>
        <div className="gradient-overlay-light"></div>
        <BoltHoles />
        { props.page == 1 && (
          <div className="width-text noselect">{ props.deckWidth }</div>
        )}
      </div>
    </div>
  ) 
}