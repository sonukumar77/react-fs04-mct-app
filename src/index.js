import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import App from "./App";
import myStore from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
