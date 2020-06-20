export const emojiNames = [
  'fire',
  'gun',
  'crystal_ball',
  'black_heart',
  'grinning',
  'smiling_imp',
  'kissing_heart',
  'sleepy'
]

export const shuffle = (arr: string[]) => {
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr;
}

export const  shuffle2 = (arr: string[]) => {
  return arr.sort(() => Math.random() - 0.5);
}
