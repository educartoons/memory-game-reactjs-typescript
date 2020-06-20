import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";

import Grid from "../Grid";

import WrapperStyled from "../../styles/WrapperStyled";
import GlobalStyles from "../../styles/GlobalStyles";

const Application = () => {
  const [win, setWin] = useState(false);
  const handleWin = () => {
    setWin(true);
  };
  useEffect(() => {
    ReactGA.initialize("UA-170172978-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <GlobalStyles />
      <WrapperStyled>
        <h2>Memoji Game</h2>
        <Grid handleWin={handleWin} />
        {win && (
          <p>
            You win{" "}
            <span role="img" aria-label="party">
              🎉
            </span>
          </p>
        )}
      </WrapperStyled>
      <footer style={{ marginTop: "3em", textAlign: "center" }}>
        Created with{" "}
        <span role="img" aria-label="heart icon">
          ❤️
        </span>{" "}
        by{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://eduarruben.com"
        >
          eduarruben.com
        </a>
      </footer>
    </>
  );
};

export default Application;
