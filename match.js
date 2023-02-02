const matchArr = (arr, regex) => {
  let count = 0;
  let matches = arr.reduce((result, str) => {

    let matchArr = str.match(regex);
    matchArr = matchArr || [];

    count += matchArr.length;
    result.push(...matchArr);
  
    return result;
  }, []);
  console.log({matches: matches, totalMatches: count});
}

module.exports = matchArr;