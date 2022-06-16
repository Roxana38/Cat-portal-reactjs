import React from "react";
import Navbar from "./components/navbar";
import MyImages from "./pages/myImages";
import Upload from "./pages/upload";
import PublicImages from "./pages/publicImages";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/myImages">
            <MyImages />
          </Route>
          <Route path="/publicImages">
            <PublicImages />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
