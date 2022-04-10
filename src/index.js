import { createRoot } from "react-dom/client";
import App from "./App.js";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
);
