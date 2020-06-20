import React from "react";
import emoji from "node-emoji";

import { useSpring, animated } from "react-spring";

import CardStyled from "../../styles/CardStyled";
import { ICard } from "../Grid";

interface IProps {
  card: ICard;
  id: number;
  handleFlipCard: (id: number) => void;
}

const Card = (props: IProps) => {
  const { transform, opacity } = useSpring({
    opacity: props.card.flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${props.card.flipped ? 180 : 0}deg)`,
    config: {
      mass: 5,
      tension: 500,
      friction: 80
    }
  });

  return (
    <CardStyled
      className={props.card.marked ? "matched" : ""}
      onClick={() => props.handleFlipCard(props.id)}
    >
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
        <span>{emoji.get(props.card.emojiName)}</span>
      </animated.div>
    </CardStyled>
  );
};

export default Card;
