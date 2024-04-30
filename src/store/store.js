import {applyMiddleware, combineReducers, createStore} from "redux";
import {moviesReducer} from "./reducer";
import {catalogReducer} from "./catalog/reducer";
import {filmReducer} from "./film/reducer";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
  movies: moviesReducer,
  catalog: catalogReducer,
  film: filmReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
