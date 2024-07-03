import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import textColorData from '../../../data/textColorData';
import ColorButton from './ColorButton';
function colorPicker(props) {
    function invertColor(hex) {
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex.split('').map(function (hex) {
                return hex + hex;
            }).join('');
        }
        if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
        }
        var r = parseInt(hex.slice(0, 2), 16), g = parseInt(hex.slice(2, 4), 16), b = parseInt(hex.slice(4, 6), 16);
        // https://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#FFFFFF';
    }
    ;
    const finalColor = invertColor(props.textColor);
    return (_jsxs("div", { className: "text-color-picker", children: [_jsx("div", { className: "current-text-color", style: { background: props.textColor }, children: _jsx("span", { style: { color: finalColor }, children: textColorData.color }) }), _jsx("div", { className: "text-color-options", children: textColorData.map((textColorData, i) => (_jsx(ColorButton, { textColorData: textColorData, handleTextColorChange: props.handleTextColorChange }, i))) })] }));
}
export default colorPicker;
