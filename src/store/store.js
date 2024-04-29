import {applyMiddleware, combineReducers, createStore} from "redux";
import {moviesReducer} from "./reducer";
import {thunk} from "redux-thunk";
import {catalogReducer} from "./catalog/reducer";
import {filmReducer} from "./film/reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  catalog: catalogReducer,
  film: filmReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
