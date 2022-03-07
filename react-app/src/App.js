import React from "react";
import { Route, Switch, Redirect } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top";
import { CaretUpOutlined } from "@ant-design/icons";

// global
import NavBar from "./components/navBar/";

// pages
import Works from './components/pages/works/';
import Info from './components/pages/info/';
import NotFound from './components/pages/notFound';

//style
import "./App.sass"

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Works} />
          <Route path="/info" component={Info} />
          <Route path="/notfound" component={NotFound} />
          <Redirect to="/notfound" />
        </Switch>
        <div id="scroll-top-btn">
          <ScrollToTop
            smooth={true}
            top={150}
            component={<CaretUpOutlined />}
          />
        </div>
      </main>
    </>
  );
}

export default App;
