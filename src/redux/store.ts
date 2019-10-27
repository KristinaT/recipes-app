import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { RecipesState } from "./reducers/recipesReducer";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

type State = {
  recipes: Readonly<RecipesState>;
};

export type StoreState = Readonly<State>;

const middlewares = [thunk];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default { store, persistor };
