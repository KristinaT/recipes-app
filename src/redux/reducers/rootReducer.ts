import recipes from "./recipesReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["recipes"]
};
const rootReducer = combineReducers({
  recipes
});

export default persistReducer(persistConfig, rootReducer);
