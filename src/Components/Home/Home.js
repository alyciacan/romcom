import './Home.css';
import Cover from '../Cover/Cover';
import { useState, useEffect } from 'react';
import data from '../../data.js';
import { generateRandomNum } from '../../utils';

const Home = () => {
    const [images, setImages] = useState([...data.covers]);
    const [titles, setTitles] = useState([...data.titles]);
    const [descriptors, setDescriptors] = useState([...data.descriptors]);
    const [currentCover, setCurrentCover] = useState({});
    const [needNew, setNeedNew] = useState(false);

    useEffect(() => {
        const image = images[generateRandomNum(images.length)];
        const title = titles[generateRandomNum(titles.length)];
        const adjectives = [descriptors[generateRandomNum(descriptors.length)], descriptors[generateRandomNum(descriptors.length)]];
        setCurrentCover({ image: image, title: title, adjectives:  adjectives })

        return () => {
            setNeedNew(false);
        }
    }, [needNew])

    const getNewPoster = () => {
        setNeedNew(true)
    };

    return (
    <section className="home">
        <p>This is the home page.</p>
        <button onClick={ getNewPoster }>Generate New Random Poster</button>
        { currentCover.adjectives && <Cover currentCover={ currentCover } /> }
    </section>
    )
}

export default Home;