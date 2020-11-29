findMinLengthOfThreeWords = (wrd1, wrd2, wrd3) => {

    var shortestWord = wrd1.length;

    if (wrd1.length < wrd2.length && wrd1.length < wrd3.length) {

        shortestWord = wrd1.length;

    } else if (wrd2.length < wrd1.length && wrd2.length < wrd3.length) {

        shortestWord = wrd2.length;

    } else {shortestWord = wrd3.length}; 

    return shortestWord;
};

console.log (findMinLengthOfThreeWords('a', 'be', 'see'));
