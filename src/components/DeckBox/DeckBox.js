import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ReactFitty } from 'react-fitty';
import BoltHoles from './BoltHoles';
import ColorSize from './Step01-ColorAndSize/ColorSize';
import DeckText from './Step02-Text/DeckText';
import AddStickers from './Step03-Stickers/AddStickers';
export default function DeckBox(props) {
    const PageDisplay = () => {
        if (props.page === 1) {
            return _jsx(ColorSize, { deckWidth: props.deckWidth, deckColor: props.deckColor, handleChange: props.handleChange });
        }
        else if (props.page === 2) {
            return _jsx(DeckText, { handleCopyChange: props.handleCopyChange, deckText: props.deckText1, deckText2: props.deckText2, textColor: props.textColor, handleTextColorChange: props.handleTextColorChange });
        }
        else if (props.page === 3) {
            return _jsx(AddStickers, {});
        }
    };
    return (_jsxs("div", { className: "deck-box-wrapper", children: [_jsxs("div", { className: "deckbox", children: [(props.textInit || props.page >= 2) && (_jsx("div", { className: "text-box", children: _jsx("div", { style: { height: 220, color: props.textColor }, children: _jsx(ReactFitty, { maxSize: 270, minSize: 15, children: props.deckText }) }) })), _jsx("img", { className: "deckImage", src: props.deckColor, alt: "" }), _jsx("div", { className: "gradient-overlay-dark" }), _jsx("div", { className: "gradient-overlay-light" }), _jsx(BoltHoles, {}), props.page == 1 && (_jsx("div", { className: "width-text noselect", children: _jsxs("p", { children: ["Width: ", props.deckWidth] }) }))] }), PageDisplay()] }));
}
