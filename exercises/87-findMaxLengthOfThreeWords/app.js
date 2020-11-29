findMaxLengthOfThreeWords = (wrd1, wrd2, wrd3) => {

    var longestWord = wrd1.length;

    if (wrd1.length > wrd2.length && wrd1.length > wrd3.length) {

        longestWord = wrd1.length;

    } else if (wrd2.length > wrd1.length && wrd2.length > wrd3.length) {

        longestWord = wrd2.length;

    } else {longestWord = wrd3.length}; 

    return longestWord;
};

console.log (findMaxLengthOfThreeWords('a', 'be', 'see'));