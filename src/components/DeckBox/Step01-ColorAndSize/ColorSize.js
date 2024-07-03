import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DropDown from '../../dropDown';
import colorData from '../../../data/colorData';
import widthData from '../../../data/widthData';
export default function ColorSize(props) {
    return (_jsxs("div", { className: "options", children: [_jsxs("span", { children: [_jsx("p", { children: "What color deck?" }), _jsx(DropDown, { options: colorData, selected: props.deckColor, handleChange: props.handleChange, targetTrait: "deckColor" })] }), _jsxs("span", { children: [_jsx("p", { children: "What size deck?" }), _jsx(DropDown, { options: widthData, selected: props.deckWidth, handleChange: props.handleChange, targetTrait: "deckWidth" })] })] }));
}
;
