import DropDown from '../components/dropDown';
import colorData from '../data/colorData';
import widthData from '../data/widthData';

export default function ColorSize(props) {
  
    return (
      <div className="options">
        <span>
          <p>What color deck?</p>
          <DropDown options={ colorData } selected={ props.deckColor } handleChange={ props.handleChange } targetTrait="deckColor"/>
        </span>
        <span>
          <p>What size deck?</p>
          <DropDown options={ widthData } selected={ props.deckWidth } handleChange={ props.handleChange } targetTrait="deckWidth"/>
        </span>
      </div>
    );
  };