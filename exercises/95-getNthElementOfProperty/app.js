var obj = {
  key: [1, 2, 6]
};

getNthElementOfProperty = (a, b) => {

    var finalResult = a.find (x => x.b, 0); 
console.log(finalResult);

    return finalResult;
};

getNthElementOfProperty (obj, 'key');