import * as React from "react";

import { Label } from "office-ui-fabric-react/lib/Label";
import {
  TextField,
  ITextFieldStyles
} from "office-ui-fabric-react/lib/TextField";
import { getId } from "office-ui-fabric-react/lib/Utilities";
import { Stack, IStackTokens } from "office-ui-fabric-react/lib/Stack";
import { DefaultButton, PrimaryButton } from "office-ui-fabric-react";

// Tokens definition
const containerStackTokens: IStackTokens = { childrenGap: 5 };
const verticalGapStackLabelTokens: IStackTokens = {
  childrenGap: 10,
  padding: "12px 10px 10px 10px"
};

const verticalGapStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10
};

const narrowTextFieldStyles: Partial<ITextFieldStyles> = {
  fieldGroup: { width: 180 }
};

// Example formatting
const gameButtonStackTokens: IStackTokens = { childrenGap: 10 };

export const LabelBasicExample = () => {
  // Use getId() to ensure that the ID is unique on the page.
  // (It's also okay to use a plain string without getId() and manually ensure uniqueness.)
  const playerNameId = getId("playerName");
  const factorId = getId("factor");
  const noOfProblems = getId("noOfProblems");

  return (
    <div>
      <Stack horizontal tokens={containerStackTokens}>
        <Stack tokens={verticalGapStackLabelTokens}>
          <Stack.Item align="end">
            <Label htmlFor={playerNameId}>Player Name</Label>
          </Stack.Item>
          <Stack.Item align="end">
            <Label htmlFor={factorId}>Factor</Label>
          </Stack.Item>
          <Stack.Item align="end">
            <Label htmlFor={noOfProblems}>Number of Problems</Label>
          </Stack.Item>
        </Stack>
        <Stack tokens={verticalGapStackTokens}>
          <TextField id={playerNameId} styles={narrowTextFieldStyles} />
          <TextField id={factorId} styles={narrowTextFieldStyles} />
          <TextField id={noOfProblems} styles={narrowTextFieldStyles} />
          <Stack horizontal tokens={gameButtonStackTokens}>
            <PrimaryButton
              text="Start Game"
              onClick={_alertClicked}
              allowDisabledFocus
            />
            <DefaultButton
              text="Calculate Score"
              onClick={_alertClicked}
              allowDisabledFocus
            />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

function _alertClicked(): void {
  alert("Clicked");
}
