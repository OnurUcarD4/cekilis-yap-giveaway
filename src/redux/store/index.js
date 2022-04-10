import { createStore } from "redux";
import reducers from "../reducers";
import { persistStore } from "redux-persist";

function configureStore(preloadedState) {
  const store = createStore(reducers, preloadedState);

  return store;
}

const store = configureStore();

const persistor = persistStore(store);

export { store, persistor };
