const urlEncode = function(text) {
  // Put your solution here
  let updatedText = "";
  for (let i = 0; i < text.length; i++){
      if (text[i] === " " || text[i] === 0){
        updatedText = updatedText + '20%';     
      }
      else {
        updatedText = updatedText + text[i];
      }
    }
  return updatedText;
};
  
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
