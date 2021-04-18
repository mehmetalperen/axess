import React, { useEffect } from "react";
import Interface from "./components/Interface";
import { register } from "axess";

function App() {
  useEffect(function () {
    register();
  }, []);
  return <Interface />;
}

export default App;
