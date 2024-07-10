import './dropDown.scss';

export default function DropDown(props: any) {
  // console.log(props.selected)
  return (
      <select className="dropdown"
        name={ props.targetElement }
        value={ props.selected }
        onChange={(e)=> props.handleChange( e.target.value, props.targetAttribute )} >
              { props.options.map((option: any, i: number) =>
                <option
                  key={i}
                  value={option.value}>
                    { !option.label ? option.value : option.label }
                </option>
              )}
      </select>
  );
}