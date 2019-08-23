import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import MatchPage from "./components/MatchPage"
import PlayerPage from "./components/PlayerPage"
import IDForm from './components/IDForm';
import MainPage from './components/MainPage'   
import SearchPlayer from './components/SearchPlayer';
import "./App.css"

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route path="/" exact component={MainPage}/>
        <Route path="/match/" exact render={() => <IDForm formatch placeholder="Match ID"/>} />
        <Route path="/search/" component={SearchPlayer} />
        <Route path="/match/:id" component={MatchPage} />
        <Route path="/player/:id" component={PlayerPage} />
      </Router>
    </div>
  );
}

export default App;
