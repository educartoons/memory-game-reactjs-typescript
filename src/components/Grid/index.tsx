import React, {useState, useEffect} from 'react';
import Card from '../Card';

import GridStyled from '../../styles/GridStyled'

import {emojiNames, shuffle} from '../../utils';


const elements = [...emojiNames, ...emojiNames]

const Grid = () => {
  const [cards, setCards] = useState<string[]>([]);
  useEffect(()=>{
    const suffledCards = shuffle(elements);
    setCards(suffledCards);
  }, []);
  return <GridStyled>
    {
      cards.map((emojiName: string, i: number)=><Card key={i} emojiName={emojiName}/>)
    }
  </GridStyled>
}

export default Grid;