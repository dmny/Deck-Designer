import { jsx as _jsx } from "react/jsx-runtime";
function ColorButton(props) {
    return (_jsx("button", { className: "text-color-option", value: props.textColorData.hex, style: { background: props.textColorData.hex }, onClick: () => props.handleTextColorChange(event.target.value) }));
}
export default ColorButton;
