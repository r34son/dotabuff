import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import MatchPage from "./components/MatchPage/MatchPage"
import PlayerPage from "./components/PlayerPage/PlayerPage"
import IDForm from './components/IDForm/IDForm';
import "./App.css"

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route path="/match/" exact render={() => <IDForm forplayer={false} placeholder="Match ID"/>} />
        <Route path="/player/" exact render={() => <IDForm forplayer placeholder="Player ID" value="212884473"/>} />
        <Route path="/match/:id" component={MatchPage}  />
        <Route path="/player/:id" component={PlayerPage}  />
      </Router>
    </div>
  );
}

export default App;
