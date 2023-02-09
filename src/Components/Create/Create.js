import './Create.css';
import { useState, useContext } from 'react';
import { SavedCoversContext } from '../../Contexts/SavedCoversContext';


const Create = () => {
    const [userImage, setUserImage] = useState("");
    const [userTitle, setUserTitle] = useState("");
    const [userNoun1, setUserNoun1] = useState("");
    const [userNoun2, setUserNoun2] = useState("");
    const [userCreatedCover, setUserCreatedCover] = useState({})
    const { save } = useContext(SavedCoversContext)

    const handleChange = (e, type) => {
        if(type === "title") {
            setUserTitle(e.target.value);
        } else if (type === "url") {
            setUserImage(e.target.value);
        } else if (type === "noun1") {
            setUserNoun1(e.target.value);
        } else {
            setUserNoun2(e.target.value);
        }
    };

    const validateInputs = () => {
        return (userImage && userTitle && userNoun1 && userNoun2)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserCreatedCover({ image: userImage, title: userTitle, dramaticNouns: [userNoun1, userNoun2] })
    };

    return (
        <section>
            <form>
                <label>
                    Image URL:
                    <input type="text" onChange={ (e) => handleChange(e, "url") } ></input>
                </label>
                <label>
                    Novel Title:
                    <input type="text" onChange={ (e) => handleChange(e, "title") }></input>
                </label>
                <label>
                    Dramatic Noun:
                    <input type="text" onChange={ (e) => handleChange(e, "noun1") }></input>
                </label>
                <label>
                    Another Dramatic Noun:
                    <input type="text" onChange={ (e) => handleChange(e, "noun2") }></input>
                </label>
                <input onClick={ handleSubmit } type="submit" value="Create my cover!" disabled={ !validateInputs() } />
            </form>
            { userCreatedCover.title && 
                <div>
                    <img src={ userCreatedCover.image } className="cover-img"/>
                    <img src="details/overlay.png" />
                    <h2>{ userCreatedCover.title }</h2>
                    <h3>{ `A tale of ${ userCreatedCover.dramaticNouns[0]} and ${userCreatedCover.dramaticNouns[1]}`}</h3>
                    <button onClick={ () => save(userCreatedCover) }>Save this poster</button>
                </div>

            }
        </section>
    )
}

export default Create;