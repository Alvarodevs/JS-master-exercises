var obj = {
  key: [1, 2, 4]
};

getFirstElementOfProperty = (a, b) => {

    var finalResult = Object.values(a[b]) [0]; 

    return finalResult;
};

getFirstElementOfProperty (obj, 'key');