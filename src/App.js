import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Profile from './pages/Profile';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import FoodsInProgress from './pages/FoodsInProgress';
import DrinksInProgress from './pages/DrinksInProgress';
import './css/Footer.css';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/foods/:foodId/in-progress" component={ FoodsInProgress } />
        <Route path="/drinks/:recipeId/in-progress" component={ DrinksInProgress } />
        <Route path="/foods/:recipeId" component={ RecipeDetails } />
        <Route path="/drinks/:recipeId" component={ RecipeDetails } />
        <Route path="/foods" component={ Foods } />
        <Route path="/drinks" component={ Drinks } />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </div>
  );
}

export default App;
