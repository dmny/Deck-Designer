
export default function DropDown(props: any) {
  return (

      <select className="dropdown"
        name={ props.targetElement }
        value={ props.selected }
        onChange={(e)=> props.handleChange( e.target.value, props.targetTrait )} >
              { props.options.map((option: any, i: number) => <option key={i} value={option.value} >{ option.label == null ? option.value : option.label }</option> ) }
      </select>
  );
}