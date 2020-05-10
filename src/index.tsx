import * as React from "react";
import { render } from "react-dom";
import { initializeIcons } from "office-ui-fabric-react";
import { LabelBasicExample } from "./multimath";

initializeIcons();

function App() {
  return (
    <div>
      <LabelBasicExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
