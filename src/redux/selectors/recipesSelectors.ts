import { Selector } from "../../redux/types";
import { RecipesState, Recipe } from "../reducers/recipesReducer";
import { StoreState } from "../store";

export const getRecipesState: Selector<StoreState, RecipesState> = state =>
  state.recipes;

export const getRecipes: Selector<StoreState, Recipe[]> = state =>
  getRecipesState(state).recipes;
