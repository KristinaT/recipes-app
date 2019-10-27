import { Recipe } from "../reducers/recipesReducer";

export enum RecipeActions {
  ADD_RECIPE = "ADD_RECIPE",
  DELETE_RECIPE = "DELETE_RECIPE",
  SHOW_RECIPES = "SHOW_RECIPES",
  FETCH_RECIPES_START = "FETCH_RECIPES_START",
  FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS",
  FETCH_RECIPES_FAILURE = "FETCH_RECIPES_FAILURE"
}

// export type AddRecipeAction = ActionWithPayload<
//   typeof RecipeActions.ADD_RECIPE,
//   Recipe
// >;

interface AddRecipeAction {
  type: RecipeActions.ADD_RECIPE;
  payload: Recipe;
}

interface DeleteRecipeAction {
  type: RecipeActions.DELETE_RECIPE;
  payload: any;
}

interface ShowRecipesAction {
  type: RecipeActions.SHOW_RECIPES;
  payload: any;
}

interface FetchRecipeStartAction {
  type: RecipeActions.FETCH_RECIPES_START;
}

interface FetchRecipeSuccessAction {
  type: RecipeActions.FETCH_RECIPES_SUCCESS;
  payload: any;
}

interface FetchRecipeFailureAction {
  type: RecipeActions.FETCH_RECIPES_FAILURE;
  payload: Error;
}

export type RecipeActionTypes =
  | AddRecipeAction
  | DeleteRecipeAction
  | ShowRecipesAction
  | FetchRecipeSuccessAction
  | FetchRecipeFailureAction
  | FetchRecipeStartAction;
