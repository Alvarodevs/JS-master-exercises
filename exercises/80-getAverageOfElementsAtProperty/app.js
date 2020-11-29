  let obj = {
      key: [1, 2, 3]
      };

function getAverageOfElementsAtProperty(object, key){

    var sum = 0;
    var final = 0;
    
    if (object.key.length == 0){
        return 0;
    }

    for(var i = 0; i < object.key.length; i++){

        sum += object.key[i];
    }

        final = sum / object.key.length;

        return final;
       
};
console.log (getAverageOfElementsAtProperty(obj,"key"));

