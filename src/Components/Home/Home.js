import './Home.css';
import Cover from '../Cover/Cover';

const Home = () => {
    return (
    <section className="home">
        <p>This is the home page.</p>
        <button>Generate New Random Poster</button>
        <Cover />
    </section>
    )
}

export default Home;