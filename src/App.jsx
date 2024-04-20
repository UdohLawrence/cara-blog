import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Create from "./components/Create";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";{/*/cjs/react-router-dom.min";*/}

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="content">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
