import './App.css';
import Home from '../Home/Home';
import Create from '../Create/Create';
import Saved from '../Saved/Saved';
import Nav from '../Nav/Nav';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';


const App = () => {

  return (
    <Router className="App">
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Home />}/>
        <Route path="/create" render={() => <Create />} />
        <Route path="/saved" render={() => <Saved />} />
      </Switch>
    </Router>
  )
}

export default App;
