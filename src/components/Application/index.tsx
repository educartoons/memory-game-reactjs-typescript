import React, { useState } from "react";

import Grid from "../Grid";

import WrapperStyled from "../../styles/WrapperStyled";
import GlobalStyles from "../../styles/GlobalStyles";

const Application = () => {
  const [win, setWin] = useState(false);
  const handleWin = () => {
    setWin(true);
  };
  return (
    <>
      <GlobalStyles />
      <WrapperStyled>
        <h2>Memoji Game</h2>
        <Grid handleWin={handleWin} />
        {win}
        {win && (
          <p>
            You win{" "}
            <span role="img" aria-label="party">
              🎉
            </span>
          </p>
        )}
      </WrapperStyled>
    </>
  );
};

export default Application;
