import './Home.css';
import Cover from '../Cover/Cover';
import { useState, useEffect } from 'react';
import data from '../../data.js';
import { generateRandomNum } from '../../utils';

const Home = () => {
    const [images] = useState([...data.covers]);
    const [titles] = useState([...data.titles]);
    const [descriptors] = useState([...data.descriptors]);
    const [currentCover, setCurrentCover] = useState({});
    const [needNew, setNeedNew] = useState(false);

    useEffect(() => {
        const image = images[generateRandomNum(images.length)];
        const title = titles[generateRandomNum(titles.length)];
        const dramaticNouns = [descriptors[generateRandomNum(descriptors.length)], descriptors[generateRandomNum(descriptors.length)]];
        setCurrentCover({ image: image, title: title, dramaticNouns:  dramaticNouns, id: Date.now() })

        return () => {
            setNeedNew(false);
        }
    }, [needNew])

    const getNewPoster = () => {
        setNeedNew(true)
    };

    return (
    <section className="home">
        <button onClick={ getNewPoster }>Generate New Random Poster</button>
        { currentCover.dramaticNouns && <Cover currentCover={ currentCover } /> }
    </section>
    )
}

export default Home;