import themeReducer from "./theme/reducer";
import { createStore, Store } from "redux";
import { DispatchType, ThemeAction, ThemeState } from "./theme/types";

const store: Store<ThemeState, ThemeAction> & {
  dispatch: DispatchType;
} = createStore(themeReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
