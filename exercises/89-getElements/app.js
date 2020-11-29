var obj = {
  key: [1000, 10, 50, 10]
};

var result = [];

getElementsThatEqual10AtProperty = (array) => {

    for (i = 0; i < array.length; i++) {

        if (array[i] == 10) {
            return result;
        };
    };
};
console.log (getElementsThatEqual10AtProperty(obj.key));
