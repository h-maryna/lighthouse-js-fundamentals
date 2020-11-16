var numberOfVowels = function(data) {
  const vowels = ["a","e","i","o","u"]
  let newArray = [];

for(let i = 0; i < data.length; i++){
  if(data[i] === "a" || data[i] === "o" ||data[i] === "i" || data[i] === "e" || data[i] === "u"){ 
    newArray.push(vowels);
  }
  }
  return newArray.length;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));