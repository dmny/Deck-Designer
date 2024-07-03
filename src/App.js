import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import StepData from './data/stepData';
import DeckBox from './components/DeckBox/DeckBox';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
export default function Home() {
    const stepHeader = StepData.map(steps => steps.header);
    const [page, setPage] = useState(0);
    const [deckColor, setDeckColor] = useState("/NaturalDeck.jpg");
    const [textColor, setTextColor] = useState("#000");
    const [deckWidth, setDeckWidth] = useState("8.0 in");
    const [deckText1, setDeckText1] = useState("YOUR TEXT HERE");
    const [textInit, setTextInit] = useState(false);
    function handleChange(value, trait) {
        switch (trait) {
            case 'deckColor':
                setDeckColor(value);
                break;
            case 'deckWidth':
                setDeckWidth(value);
                break;
        }
        ;
    }
    ;
    function handlePage(value) {
        setPage(value);
    }
    function handleTextColorChange(value) {
        setTextColor(value);
        // console.log(value);
    }
    ;
    function handleCopyChange(field, e) {
        !textInit && setTextInit(true);
        const value = e.target.value;
        // console.log(event.target);
        switch (field) {
            case 'deckText1':
                setDeckText1(value);
                break;
            case 'deckText2':
                // setDeckText2(value);
                break;
        }
    }
    return (_jsxs("div", { className: "config-container", children: [_jsx(Header, { page: page, steps: StepData, stepHeader: stepHeader }), _jsx(DeckBox, { deckWidth: deckWidth, deckColor: deckColor, deckText: deckText1, textColor: textColor, page: page, textInit: textInit, handleChange: handleChange, handleCopyChange: handleCopyChange, handleTextColorChange: handleTextColorChange }), _jsx(Footer, { page: page, steps: StepData, handlePage: handlePage })] }));
}
