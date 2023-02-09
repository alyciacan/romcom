import { createContext, useState, useEffect } from 'react';

export const SavedCoversContext = createContext();

export const SavedCoversProvider = ({ children }) => {
    const [savedCovers, setSavedCovers] = useState(() => {
        const localData = localStorage.getItem('covers');
        return localData ? JSON.parse(localData) : []
    });

    const save = (coverObj) => {
        setSavedCovers([...savedCovers, coverObj])
    };

    const value = { savedCovers, setSavedCovers, save }

    useEffect(() => {
        localStorage.setItem('covers', JSON.stringify(savedCovers))
    }, [savedCovers])

    console.log(savedCovers)
    return (
        <SavedCoversContext.Provider value={ value }>{ children }</SavedCoversContext.Provider>
    )
};