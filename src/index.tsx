import * as React from "react";
import { render } from "react-dom";
import { initializeIcons } from "office-ui-fabric-react";

import { ButtonDefaultExample } from "./ButtonDefaultExample";

initializeIcons();

function App() {
  return (
    <div>
      <ButtonDefaultExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
