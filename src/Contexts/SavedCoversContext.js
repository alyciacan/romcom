import { createContext, useState, useEffect } from 'react';

export const SavedCoversContext = createContext();

export const SavedCoversProvider = ({ children }) => {
    const [savedCovers, setSavedCovers] = useState(() => {
        const localData = localStorage.getItem('covers');
        return localData ? JSON.parse(localData) : []
    });
    const value = { savedCovers, setSavedCovers }

    useEffect(() => {
        localStorage.setItem('covers', JSON.stringify(savedCovers))
    }, [savedCovers])

    return (
        <SavedCoversContext.Provider value={ value }>{ children }</SavedCoversContext.Provider>
    )
};