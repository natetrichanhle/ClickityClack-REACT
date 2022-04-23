import React from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import SellFormView from "./views/SellFormView";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/item/new">
          <SellFormView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
