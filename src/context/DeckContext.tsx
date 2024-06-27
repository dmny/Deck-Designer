import React, { useContext, useState } from 'react'

const DeckContext = React.createContext()
const DeckUpdateContext = React.createContext()

export function useDeck() {
    return useContext(DeckContext)
}

export function useDeckUpdate() {
    return useContext(DeckUpdateContext)
}

export function DeckProvider({ children }) {
    const [deckColor, setDeckColor] = useState("/NaturalDeck.jpg")
    const [deckWidth, setDeckWidth] = useState("8.0in")
    const [deckText, setDeckText] = useState()
    const handleChange = (event) => {
        const which = (event.target.name);
        switch (which) {
            case 'deckColor':
                setDeckColor(event.target.value);
                break;
            case 'deckWidth':
                setDeckWidth(event.target.value);
                break;
            case 'deckText':
                setDeckWidth(event.target.value);
                break;
        }
    };

    return (
        <DeckContext.Provider value={{ deckColor, deckWidth }}>
            <DeckUpdateContext.Provider value={ handleChange }>
                { children }
            </DeckUpdateContext.Provider>
        </DeckContext.Provider>
    )
}