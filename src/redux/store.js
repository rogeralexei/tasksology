import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";
import rootReducer from "./reducers";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;