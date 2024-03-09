numberSequence = [1,2,3,4,5];

function sumOfTripledEvens (array) {

sumArray = 0;

  for (i=0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sumArray += (array[i] * 3);
    }
  }

  return sumArray;
}

console.log(sumOfTripledEvens(numberSequence));