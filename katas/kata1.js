let sumLargestNumbers = function(data){
  let num1 = 0;
  let num2 = 0;
  let twoLargest = [0, 0];
  for (let i = 0; i < data.length; i++){
      if (data[i] > num1){
        num1 = data[i]; 
        twoLargest[0] = num1;
      }
      for (let j = 0; j < data.length; j++){
        if (data[j] < twoLargest[0] && data[j] > num2) {
          num2 = data[j];
          twoLargest[1] = num2; 
        } 
      }
    } 
  return twoLargest[0] + twoLargest[1]; 
} 

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));