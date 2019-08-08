import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header"
import MatchPage from "./components/MatchPage/MatchPage"
import PlayerPage from "./components/PlayerPage/PlayerPage"

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route path="/match/" component={MatchPage} />
        <Route path="/player/" component={PlayerPage} />
      </Router>
    </div>
  );
}

export default App;
