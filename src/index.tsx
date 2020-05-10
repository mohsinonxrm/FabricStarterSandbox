import * as React from "react";
import { render } from "react-dom";
import { initializeIcons } from "office-ui-fabric-react";

import { DetailsListDocumentsExample } from "./ItemListExample";
//import { ButtonDefaultExample } from "./ButtonDefaultExample";
//import CalendarButtonDefault from "./CalendarButtonExample";

initializeIcons();

function App() {
  return (
    <div>
      <DetailsListDocumentsExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
