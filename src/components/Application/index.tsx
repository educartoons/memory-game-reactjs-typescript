import React from "react";
import Grid from "../Grid";

import { GameProvider } from "../../providers/GameProvider";

import WrapperStyled from "../../styles/WrapperStyled";
import GlobalStyles from "../../styles/GlobalStyles";

const Application = () => {
  return (
    <>
      <GameProvider>
        <GlobalStyles />
        <WrapperStyled>
          <Grid />
        </WrapperStyled>
      </GameProvider>
    </>
  );
};

export default Application;
