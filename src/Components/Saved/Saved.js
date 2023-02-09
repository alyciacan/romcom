import './Saved.css';
import Cover from '../Cover/Cover';
import { useContext } from 'react';
import { SavedCoversContext } from '../../Contexts/SavedCoversContext';

const Saved = () => {
    const { savedCovers, setSavedCovers } = useContext(SavedCoversContext)

    const covers = savedCovers.map(coverObj => {
        return (
            <figure key={ coverObj.id }>
                <img src={ coverObj.image } className="cover-img-small"/>
                <h4>{ coverObj.title }</h4>
                <h5>{ `A tale of ${ coverObj.dramaticNouns[0]} and ${coverObj.dramaticNouns[1]}`}</h5>
                <p type="button" onClick={ () => deleteCover(coverObj.id) }>🗑️</p>
            </figure>
        )
    })

    const deleteCover = (id) => {
        let coverToDelete = savedCovers.find(cover => cover.id === id);
        const copy = [...savedCovers];
        copy.splice(copy.indexOf(coverToDelete), 1);
        setSavedCovers(copy);
    };

    return (
        <section className="saved-container">
            { savedCovers.length ? covers : <p>You have no saved covers yet!</p> }
        </section>
    )
}

export default Saved;