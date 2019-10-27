import React from "react";
import "./App.css";
import RecipeEntry from "./components/RecipeEntry/RecipeEntry";
import RecipeList from "./components/RecipeList/RecipeList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/entry">
          <RecipeEntry></RecipeEntry>
        </Route>
        <Route path="/">
          <RecipeList></RecipeList>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
