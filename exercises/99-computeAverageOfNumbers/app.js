var input = [1,2,3,4,5];

computeAverageOfNumbers = (a) => {

var sum = a.reduce ((acc, el) => acc + el, 0);

return (sum / a.length);

}

computeAverageOfNumbers(input);