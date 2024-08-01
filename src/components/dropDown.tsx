import "./dropDown.scss";

// type ItemOptions = {
//   label?: string;
//   value: string;
// };

interface DropDownProps {
  targetElement: string;
  selected: string;
  targetAttribute: string;
  options: object[];
  handleChange: (value: string, targetAttribute: string) => void;
}

export default function DropDown(props: DropDownProps) {
  console.log(props.options);
  return (
    <select
      className="dropdown"
      name={props.targetElement}
      value={props.selected}
      onChange={(e) =>
        props.handleChange(e.target.value, props.targetAttribute)
      }
    >
      {/* This : any must Die!!! */}
      {props.options.map((itemOptions: any, i: number) => (
        <option key={i} value={itemOptions.value}>
          {!itemOptions.label ? itemOptions.value : itemOptions.label}
        </option>
      ))}
    </select>
  );
}
