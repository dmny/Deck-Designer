import { jsx as _jsx } from "react/jsx-runtime";
export default function DropDown(props) {
    return (_jsx("select", { className: "dropdown", name: props.targetElement, value: props.selected, onChange: (event) => props.handleChange(event.target.value, props.targetTrait), children: props.options.map((option, i) => _jsx("option", { value: option.value, children: option.label == null ? option.value : option.label }, i)) }));
}
