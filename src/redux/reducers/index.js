import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import draw from "./draw";
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["draw"],
  blacklist: [""],
};

const rootReducers = combineReducers({
  draw,
});

const reducers = persistReducer(persistConfig, rootReducers);
export default reducers;
