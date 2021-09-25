import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <Navbar />
      <div id="main" className="container">
        <Switch>
          <Route exact={true} path="/">
            <Redirect to="/home"></Redirect>
          </Route>
          <Route exact={true} path="/home">
            <Home />
          </Route>
          <Route exact={true} path="/projects">
            <Projects />
          </Route>
          <Route exact={true} path="/about">
            <About />
          </Route>
          <Route exact={true} path="/resume">
            <Resume />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
