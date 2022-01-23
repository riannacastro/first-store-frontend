import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import reducer from "./reducers/Reducer";


export default createStore(reducer, applyMiddleware(thunk))