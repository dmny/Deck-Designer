import truckData from '../../../data/truckData';
import DropDown from '../../dropDown';
import './AddTrucks.scss'

export default function AddAccessories( props: any ) {

  // Get array of Truck brands from data file
  let brands = truckData.map(item => {
    return { label: item.brand };
  });

  // Check if truck brand is already chosen, if not set a random brand
  function random(min: number, max: number) {
    return Math.floor((Math.random())*(max-min+1))+min;
  }

  let choice = ( !props.deckAttributes.truckBrand ) ?
    brands[random( 0, brands.length - 1 )].label :
    props.deckAttributes.truckBrand;
    
  // Get array of truck widths for chosen/set truck brand
  const truckChoice = truckData.filter( obj => {
    return obj.brand === choice;
  });

  let widths: any = truckChoice.map( obj => obj.widths );
    widths = widths[0].map( (item: { manuWidth: string; actualWidth: string; }) => {
    return {
      label: item.manuWidth,
      value: item.actualWidth
    };
  });

  return (
    <div className="trucks">
      <div className="truckImg"><img src= { choice + ".png" } alt="" /></div>
      <div className="truck-options">
        <span>
          <p>Truck Brand:</p>
          <DropDown
            options={ brands }
            selected={ choice }
            handleChange={ props.handleChange }
            targetAttribute="truckBrand"
          />
        </span>
        <span>
          <p>Truck Size:</p>
          <DropDown
            options={ widths }
            // selected={ props.deckAttributes.truckWidth }
            selected={ (!props.deckAttributes.truckWidth ? props.deckAttributes.deckWidth : props.deckAttributes.truckWidth)}
            handleChange={ props.handleChange }
            targetAttribute="truckWidth"
          />
          
        </span>
        <span>
          <button>Add to cart</button>
        </span>
      </div>
    </div>
  );
};