const { Ma } = require("./words");

const START_DATE = new Date(2021, 5, 19, 0, 0, 0, 0);

function getWordForDate(e) {
  const display = Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(e);

  const s = Fa(e);
  const a = s % Ma.length;

  return [display, Ma[a]];
}
function Fa(e) {
  return getIndexForDate(START_DATE, e);
}

function getIndexForDate(e, a) {
  var s = new Date(e),
    t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
  return Math.round(t / 864e5);
}

module.exports = getWordForDate;
