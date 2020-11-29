var obj = {
  key: ['It', 'has', 'some', 'words']
};

getOddLengthWordsAtProperty = (a, b) => {

    var oddElements = a.filter (x => x.b != (b % 2 = 0));
        
console.log(oddElements);

};

getOddLengthWordsAtProperty (obj, 'key');