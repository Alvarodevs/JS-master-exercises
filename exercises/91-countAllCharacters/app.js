var string = "banana";

countAllCharacters = (a, b) => {
 
var letterCount = 0;

 for (var i = 0; i < a.length; i++) {

    if (a.charAt(i) == b) {
      letterCount += 1;
    };
  };
  return letterCount;
};
countAllCharacters(string, "b");


//console.log(countAllCharacters(string, "b"));
//console.log(countAllCharacters(string, "a"));
//console.log(countAllCharacters(string, "n"));