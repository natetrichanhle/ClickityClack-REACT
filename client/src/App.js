import React from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import SellFormView from "./views/SellFormView";
import MainView from "./views/MainView";
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/item/new">
          <SellFormView />
        </Route>
        <Route exact path='/'>
          <MainView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
