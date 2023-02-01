const matchArr = (arr, regex) => {
  let count = 0;
  let matches = arr.filter(str => {
    let total = str.match(regex)
    total = total || [];
    count += total.length;

    return str.match(regex)
  });
  console.log({matches: matches, wordMatches: matches.length, totalMatches: count});
}

module.exports = matchArr;