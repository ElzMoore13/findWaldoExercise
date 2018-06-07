function findWaldo(arr, found) {
  //use forEach loop instead
  arr.forEach(function(person){
    if (arr[i] === 'Waldo') {
      found(i);
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + '!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);