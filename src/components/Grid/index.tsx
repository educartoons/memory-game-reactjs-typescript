import React, {useState, useEffect} from 'react';
import Card from '../Card';

import GridStyled from '../../styles/GridStyled'

import {emojiNames, shuffle} from '../../utils';


const elements = [...emojiNames, ...emojiNames]

export interface ICard{
  emojiName: string;
  flipped: boolean;
  marked: boolean;
}

function createCards (elements: string[]): ICard[]{
  return elements.map((name: string)=>{
    return {
      emojiName: name,
      flipped: false,
      marked: false, 
    }
  })
}

interface IProps{
  handleWin: any;
}

const Grid = (props: IProps) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [cardOne, setCardOne] = useState<number|null>(null);
  const [cardTwo, setCardTwo] = useState<number|null>(null);
  useEffect(()=>{
    const createdCards = createCards(shuffle(elements));
    setCards(createdCards);
  }, []);
  const handleFlipCard = (id: number) => {
    if(cards[id].marked===false && !cards[id].flipped){
      if(cardTwo===null){
        if(cardOne===null){
          setCardOne(id);
        }else{
          setCardTwo(id);
        }
        setFlippedCards(true, [id])
      }
    }
  }

  const checkMatch = () => {
    if(cardOne!==null && cardTwo!==null){
      if(cards[cardOne].emojiName===cards[cardTwo].emojiName){
        const updatedCards: ICard[] = cards.map((card: ICard, i: number)=>{
          if(i===cardOne || i===cardTwo){
            return {
              ...card,
              marked: true
            }
          }else{
            return card;
          }
        })
        setCards(updatedCards);
      }else{
        setFlippedCards(false, [cardOne, cardTwo]);
      }
      setCardOne(null);
      setCardTwo(null);
    }
    
  }

  const setFlippedCards = (flipped: boolean, cardsId: number[]) => {
    const updatedCards: ICard[] = cards.map((card: ICard, i: number)=>{
      if(cardsId.includes(i)){
        return {
          ...card,
          flipped
        }
      }else{
        return card;
      }
    })
    setCards(updatedCards);
  }

  const checkWin = () =>{
    if(cards.length>0){
      const res = cards.every((card: ICard)=>{
        return card.marked===true;
      });
      if(res===true){
        props.handleWin();
      }
    }
   
  }

  useEffect(()=>{
    setTimeout(()=>{
      checkMatch();
      checkWin();
    }, 800); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardTwo]);

  return <GridStyled>
    {
      cards.map((card: ICard, i: number)=> <Card key={i} id={i} card={card} handleFlipCard={handleFlipCard}/>)
    }
  </GridStyled>
}

export default Grid;