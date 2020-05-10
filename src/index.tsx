import * as React from "react";
import { render } from "react-dom";
import { DefaultButton, initializeIcons } from "office-ui-fabric-react";

initializeIcons();

function App() {
  return (
    <div>
      <DefaultButton iconProps={{ iconName: "Filter" }}>
        Hover Over Me
      </DefaultButton>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
