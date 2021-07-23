import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="main">
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route path="/" component={Home} />
          {/*<Route path="/sell" component={Sell} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
