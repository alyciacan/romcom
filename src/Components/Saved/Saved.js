import './Saved.css';
import Cover from '../Cover/Cover';
import { useContext } from 'react';
import { SavedCoversContext } from '../../Contexts/SavedCoversContext';

const Saved = () => {
    const { savedCovers, setSavedCovers } = useContext(SavedCoversContext)
    console.log(savedCovers)
    const covers = savedCovers.map(coverObj => {
        return (
            <figure key={ Date.now() }>
                <img src={ coverObj.image } />
                <h4>{ coverObj.title }</h4>
                <h5>{ `A tale of ${ coverObj.adjectives[0]} and ${coverObj.adjectives[1]}`}</h5>
            </figure>
        )
    })

    return (
        <section className="saved-container">
            { savedCovers.length ? covers : <p>You have no saved covers yet!</p> }
        </section>
    )
}

export default Saved;