import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ColorPicker from './ColorPicker';
export default function DeckText(props) {
    return (_jsxs("div", { className: "deck-text-container", children: [_jsxs("div", { className: "deck-text", children: [_jsx("label", { htmlFor: "deckText", children: "Express Yourself!" }), _jsx("input", { id: "deckText", type: "text", className: "form-control", placeholder: props.deckTest, name: "deckText", value: props.deckText, onChange: (e) => props.handleCopyChange("deckText1", e) })] }), _jsx(ColorPicker, { handleTextColorChange: props.handleTextColorChange, textColor: props.textColor })] }));
}
;
