var obj = {
  key: [1000, 20, 50, 500]
};

var result = [];

getElementsLessThan100AtProperty = (array) => {

    for (i = 0; i < array.length; i++) {

        if (array[i] < 100) {
            return result;
        };
    };
};
console.log (getElementsLessThan100AtProperty(obj.key));