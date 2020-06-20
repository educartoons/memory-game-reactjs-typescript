import React, { useState, useContext, useEffect } from "react";
import emoji from "node-emoji";

import { useSpring, animated } from "react-spring";

import { GameContext, IGameContext } from "../../providers/GameProvider";

import CardStyled from "../../styles/CardStyled";

interface IProps {
  emojiName: string;
}

const Card = (props: IProps) => {
  const [flipped, setFlipped] = useState(false);
  const [marked, setMarked] = useState(false);
  const gameContext: IGameContext = useContext(GameContext);
  const { cardOne, cardTwo } = gameContext.state;
  const { setCardOne, setCardTwo, resetCards } = gameContext.actions;

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: {
      mass: 5,
      tension: 500,
      friction: 80
    }
  });

  const handleFlip = () => {
    if (marked === false && flipped === false && cardTwo === null) {
      if (cardOne === null) {
        setCardOne(props.emojiName);
        setFlipped(true);
      } else if (cardTwo === null) {
        setCardTwo(props.emojiName);
        setFlipped(true);
      }
    }
  };

  useEffect(() => {
    if (marked === false && cardTwo !== null) {
      if (cardOne === cardTwo) {
        if (props.emojiName === cardTwo) {
          setMarked(true);
          resetCards();
        }
      } else {
        setTimeout(() => {
          setFlipped(false);
          resetCards();
        }, 1000);
      }
    }
  }, [cardTwo, marked, cardOne, setMarked, resetCards, props.emojiName]);

  return (
    <CardStyled onClick={handleFlip}>
      <animated.div
        className="front absolute"
        style={{
          opacity: opacity.interpolate((o: any) => 1 - 0),
          transform
        }}
      />
      <animated.div
        className="back absolute"
        style={{
          opacity,
          transform: transform.interpolate((t: any) => `${t} rotateX(180deg)`)
        }}
      >
        <span>{emoji.get(props.emojiName)}</span>
      </animated.div>
    </CardStyled>
  );
};

export default Card;
