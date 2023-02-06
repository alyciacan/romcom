import './App.css';
import Home from '../Home/Home';
import Create from '../Create/Create';
import Saved from '../Saved/Saved';
import Nav from '../Nav/Nav';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { render } from '@testing-library/react';
import data from '../../data.js';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      covers: [...data.covers],
      titles: [...data.titles],
      descriptors: [...data.descriptors]
    }
  }
    
  render = () => {
    return (
      <Router className="App">
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Home />}/>
          <Route path="/create" render={() => <Create />} />
          <Route path="/saved" render={() => <Saved />} />
        </Switch>
      </Router>
    );
    }
}

export default App;
