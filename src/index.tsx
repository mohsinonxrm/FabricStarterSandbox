import * as React from "react";
import { render } from "react-dom";
import { initializeIcons } from "office-ui-fabric-react";
import { MultiMathGame } from "./multimath";

initializeIcons();

function App() {
  return (
    <div>
      <MultiMathGame />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
