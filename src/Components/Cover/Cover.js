import './Cover.css';
import { useState, useEffect, useContext } from 'react';
import { SavedCoversContext } from '../../Contexts/SavedCoversContext';


 
const Cover = ({ currentCover }) => {
    const { savedCovers, setSavedCovers } = useContext(SavedCoversContext);

    const save = (coverObj) => {
        setSavedCovers([...savedCovers, coverObj])
    };
    
    return (
        <article className="cover">
            <img src={ currentCover.image } />
            <h2>{ currentCover.title }</h2>
            <h3>{ `A tale of ${ currentCover.adjectives[0]} and ${currentCover.adjectives[1]}`}</h3>
            <button onClick={ () => save(currentCover) }>Save this poster</button>
        </article>
    )
}

export default Cover;