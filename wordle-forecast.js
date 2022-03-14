const getWordForDate = require("./getWordForDate");

const TODAY = new Date();

for (let i = 0; i <= 7; i++) {
  const date = new Date(TODAY).setDate(TODAY.getDate() + i);
  const [dateDisplay, word] = getWordForDate(date);

  console.log(`Wordle word for ${dateDisplay} is "${word}".`);
}
