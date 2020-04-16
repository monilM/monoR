import React from "react";

import { Provider } from "react-redux";
import Counter from "./screens/Counter";
import { initializeStore } from "./reduxStore/store/initializestore";
import logo from "./logo.svg";
import "./App.css";
import sharedCode from "@monorepo/components";

function App() {
  return (
    <Provider store={initializeStore}>
      <Counter />
    </Provider>
  );
}

export default App;
