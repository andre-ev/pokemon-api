import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; // Esta linea es para conectar con la extensión del navegador => Redux Devtools

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)) // Esta linea es para poder hacer peticiones a un server
);

export default store;
