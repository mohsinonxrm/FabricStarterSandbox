import * as React from "react";

import { Label } from "office-ui-fabric-react/lib/Label";
import {
  TextField,
  ITextFieldStyles
} from "office-ui-fabric-react/lib/TextField";
import { getId } from "office-ui-fabric-react/lib/Utilities";
import { Stack, IStackTokens } from "office-ui-fabric-react/lib/Stack";
import { DefaultButton, PrimaryButton } from "office-ui-fabric-react";
import { useConstCallback } from "@uifabric/react-hooks";

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

const gameTextFieldStyles: Partial<ITextFieldStyles> = {
  fieldGroup: { width: 70 }
};

// Example formatting
const gameButtonStackTokens: IStackTokens = { childrenGap: 5 };

export const MultiMathGame = () => {
  // Use getId() to ensure that the ID is unique on the page.
  // (It's also okay to use a plain string without getId() and manually ensure uniqueness.)
  const playerNameId = getId("playerName");
  const factorId = getId("factor");
  const noOfProblems = getId("noOfProblems");

  const [
    playerNameTextFieldValue,
    setPlayerNameTextFieldValue
  ] = React.useState("");

  const [factorTextFieldValue, setFactorTextFieldValue] = React.useState("");

  const [
    noOfProblemsTextFieldValue,
    setNoOfProblemsTextFieldValue
  ] = React.useState("");

  const playerNameOnChangeTextFieldValue = useConstCallback(
    (
      event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
      newValue?: string
    ) => {
      setPlayerNameTextFieldValue(newValue || "");
    }
  );

  const factorOnChangeTextFieldValue = useConstCallback(
    (
      event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
      newValue?: string
    ) => {
      setFactorTextFieldValue(newValue || "");
    }
  );

  const noOfProblemsOnChangeTextFieldValue = useConstCallback(
    (
      event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
      newValue?: string
    ) => {
      setNoOfProblemsTextFieldValue(newValue || "");
    }
  );

  function onStartGameClick(): void {
    alert(playerNameTextFieldValue);
  }

  function onCalculateScoreClick(): void {}

  function PrepareGame() {
    return (
      <div>
        {utils.range(1, noOfProblemsTextFieldValue).map(probId => (
          <Stack tokens={verticalGapStackLabelTokens}>
            <Stack horizontal tokens={containerStackTokens}>
              <Label key={"lbl" + probId}>
                {factorTextFieldValue} x {probId} =
              </Label>
              <TextField
                key={"prob" + probId}
                id={"prob" + probId}
                styles={gameTextFieldStyles}
              />
            </Stack>
          </Stack>
        ))}
      </div>
    );
  }

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
          <TextField
            id={playerNameId}
            value={playerNameTextFieldValue}
            styles={narrowTextFieldStyles}
            onChange={playerNameOnChangeTextFieldValue}
          />
          <TextField
            id={factorId}
            value={factorTextFieldValue}
            styles={narrowTextFieldStyles}
            onChange={factorOnChangeTextFieldValue}
          />
          <TextField
            id={noOfProblems}
            value={noOfProblemsTextFieldValue}
            styles={narrowTextFieldStyles}
            onChange={noOfProblemsOnChangeTextFieldValue}
          />
          <Stack horizontal tokens={gameButtonStackTokens}>
            <PrimaryButton
              text="Start Game"
              onClick={onStartGameClick}
              allowDisabledFocus
            />
            <DefaultButton
              text="Calculate Score"
              onClick={onCalculateScoreClick}
              allowDisabledFocus
            />
          </Stack>
          <Stack>
            <PrepareGame />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

// Math science
const utils = {
  // Sum an array
  sum: (arr: any) => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  }
};
