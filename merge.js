function merge (arr1, arr2){
  var concat1 = [ ];
  concat1 = arr1.concat(arr2);
  return concat1.sort();
  }
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));
