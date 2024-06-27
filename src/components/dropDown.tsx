
export default function DropDown(props: any, handleChange) {
  console.log(props.deckColor)
  return (

      <select className="dropdown"
        name={ props.targetElement }
        value={ props.selected }
        onChange={()=> props.handleChange( event.target.value, props.targetTrait )} >
              { props.options.map((option: any) => <option key={option.id} value={option.value} >{ option.label == null ? option.value : option.label }</option> ) }
      </select>
  );
}