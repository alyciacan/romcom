import './Cover.css';
import { useState, useEffect } from 'react';

 
const Cover = ({ currentCover }) => {
    return (
        <article className="cover">
            <img src={ currentCover.image } />
            <h2>{ currentCover.title }</h2>
            <h3>{ `A tale of ${ currentCover.adjectives[0]} and ${currentCover.adjectives[1]}`}</h3>
        </article>
    )
}

export default Cover;