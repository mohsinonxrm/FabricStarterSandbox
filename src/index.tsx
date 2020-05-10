import * as React from "react";
import { render } from "react-dom";
import {
  CommandBarButton,
  IContextualMenuProps,
  IIconProps,
  IStackStyles,
  DefaultButton,
  initializeIcons,
  PrimaryButton,
  Stack,
  IStackTokens,
  Button
} from "office-ui-fabric-react";
import ButtonDefaultExample from "./ButtonDefaultExample";

initializeIcons();

function App() {
  return (
    <div>
      <DefaultButton iconProps={{ iconName: "Filter" }}>
        Hover Over Me
      </DefaultButton>
      <ButtonDefaultExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
