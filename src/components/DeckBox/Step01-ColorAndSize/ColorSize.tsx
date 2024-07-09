import DropDown from '../../dropDown';
import colorData from '../../../data/colorData';
import widthData from '../../../data/widthData';

export default function ColorSize( props: any ) {
  return (
    <div className="options">
      <span>
        <p>What color deck?</p>
        <DropDown
          options={ colorData }
          selected={ props.deckAttributes.deckColor }
          handleChange={ props.handleChange }
          targetAttribute="deckColor"
        />
      </span>
      <span>
        <p>What size deck?</p>
        <DropDown
          options={ widthData }
          selected={ props.deckAttributes.deckWidth }
          handleChange={ props.handleChange }
          targetAttribute="deckWidth"
        />
      </span>
    </div>
  );
};