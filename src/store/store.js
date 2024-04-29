import {applyMiddleware, combineReducers, createStore} from "redux";
import {moviesReducer} from "./reducer";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    movies: moviesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));