const getRandomWord = words => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

export default getRandomWord;
