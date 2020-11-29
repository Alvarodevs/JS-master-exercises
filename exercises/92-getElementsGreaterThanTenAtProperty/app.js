var obj = {
  key: [1, 20, 30]
};

var result = [];

getElementsGreaterThan10AtProperty = (array) => {

    for (i = 0; i < array.length; i++) {

        if (array[i] > 10) {
            return result;
        };
    };
};
console.log (getElementsGreaterThan10AtProperty(obj.key));