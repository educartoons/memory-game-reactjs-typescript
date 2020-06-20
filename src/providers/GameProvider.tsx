import React, { Component, createContext } from "react";

// prettier-ignore
export const GameContext = createContext<any>(null);

interface IState {
  cardOne: string | null;
  cardTwo: string | null;
}

interface IActions {
  setCardOne: (name: string | null) => void;
  setCardTwo: (name: string | null) => void;
  resetCards: () => void;
}

export interface IGameContext {
  state: IState;
  actions: IActions;
}

class GameProvider extends Component<{}, IState> {
  state: IState = {
    cardOne: null,
    cardTwo: null
  };
  setCardOne = (name: string) => {
    this.setState({
      cardOne: name
    });
  };
  setCardTwo = (name: string) => {
    this.setState({
      cardTwo: name
    });
  };
  resetCards = () => {
    this.setState({
      cardOne: null,
      cardTwo: null
    });
  };
  render() {
    return (
      <GameContext.Provider
        value={{
          state: this.state,
          actions: {
            setCardOne: this.setCardOne,
            setCardTwo: this.setCardTwo,
            resetCards: this.resetCards
          }
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export { GameProvider };

export const GameConsumer = GameContext.Consumer;
