import './Cover.css';
import { useContext } from 'react';
import { SavedCoversContext } from '../../Contexts/SavedCoversContext';
import overlay from '../assets/details/overlay.png';


 
const Cover = ({ currentCover }) => {
    const { save } = useContext(SavedCoversContext);

    return (
        <article className="cover">
            <img src={ currentCover.image } className="cover-img" />
            <img src={ overlay } className="overlay" />
            <h2 className="cover-title">{ currentCover.title }</h2>
            <div className="cover-sent-background"></div>
            <h3 className="cover-sent">{ `A tale of ${ currentCover.dramaticNouns[0]} and ${currentCover.dramaticNouns[1]}`}</h3>
            <button onClick={ () => save(currentCover) }>Save this poster</button>
        </article>
    )
}

export default Cover;