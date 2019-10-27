import { Reducer } from "redux";
import { RecipeActionTypes, RecipeActions } from "../actions/constants";
import generateId from "../../utils/generateId";

// TODO: add interfaces in separate types folder
export interface Recipe {
  id?: string;
  name?: string;
  source?: string;
  ingredients?: string[];
  preparationTime?: string;
  preparationInstructions?: string;
  error?: Error;
}

export interface RecipesState {
  recipes: Recipe[]; // todo: normalize state :@
}

const initialState: RecipesState = {
  recipes: []
};

const recipes: Reducer<RecipesState, RecipeActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [{ id: generateId(), ...action.payload }, ...state.recipes]
      };

    case RecipeActions.DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(
          (recipe: Recipe) => recipe.id !== action.payload
        )
      };
    case RecipeActions.FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload
      };
    case RecipeActions.FETCH_RECIPES_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default recipes;
