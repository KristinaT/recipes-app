import { Recipe } from "../reducers/recipesReducer";
import { RecipeActionTypes, RecipeActions } from "./constants";
import {
  firestore,
  convertCollectionsSnapshotToMap,
  addCollectionAndDocuments
} from "../../firebase/Firebase";
import { Dispatch } from "redux";
import { ThunkAction } from "../types";

export const addRecipe = (recipe: Recipe): RecipeActionTypes => {
  return { type: RecipeActions.ADD_RECIPE, payload: recipe };
};

export const deleteRecipe = (recipeId: string): RecipeActionTypes => {
  return { type: RecipeActions.DELETE_RECIPE, payload: recipeId };
};

export const fetchRecipesStart = () => {
  return { type: RecipeActions.FETCH_RECIPES_START };
};

export const fetchRecipesSuccess = (recipes: any): RecipeActionTypes => {
  return { type: RecipeActions.FETCH_RECIPES_SUCCESS, payload: recipes };
};

export const fetchRecipesFailure = (error: Error): RecipeActionTypes => {
  return { type: RecipeActions.FETCH_RECIPES_FAILURE, payload: error };
};

export const fetchRecipes = () => {
  return (dispatch: any) => {
    const recipesRef = firestore.collection("recipes");

    recipesRef
      .get()
      .then((snapshot: any) => {
        const recipes = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchRecipesSuccess(recipes));
      })
      .catch((error: Error) => {
        dispatch(fetchRecipesFailure(error));
      });
  };
};

export const addRecipeAsync = (recipe: Recipe): ThunkAction<Promise<any>> => {
  return async dispatch => {
    try {
      await addCollectionAndDocuments("recipes", [recipe]);
      console.log("success");
    } catch (e) {
      console.error(e);
    }
  };
};
