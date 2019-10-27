import { Action } from "redux";
import { ThunkAction as BaseThunkAction } from "redux-thunk";
import { StoreState } from "./store";

export interface ActionWithPayload<T, P> extends Action<T> {
  payload: P;
}

export type Selector<S, T> = (state: S) => T;

export type ThunkAction<
  R,
  A extends Action<any> = Action<any>
> = BaseThunkAction<R, StoreState, void, A>;
