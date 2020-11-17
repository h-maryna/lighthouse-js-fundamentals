
const whereCanIPark = function (spots, vehicle) {
  for (let y = 0; y < spots.length; y++){ // looping through all spots
    for(let x = 0; x < spots[y].length; x++){ // looping through each spot inside all spots
      const spot = spots[y][x]; 

      if(vehicle === "regular"){ // for regular vehicle the spot needs be "R"
        if(spot === "R"){
          return [x,y]
        }
      }else if(vehicle === "small"){ // for small vehicle the spot needs to be either "R" or "S" 
        if (spot === "R" || spot === "S"){
          return [x,y]
        }
      }else if (vehicle === "motorcycle"){
        if (spot === "R" || spot === "S" || spot === "M"){ // for motorcycle vehicle the spot needs to be either "R" or "S" or "M"
          return [x,y]
        }
      }
    } 
  // regular cars
    // regular spots
  // small cars
    // regular, small
  // motorcycle
    // regular, small, motorcycle
    }return false; // if none of the conditions meet ist should return false
  }

//const result = whereCanIPark(spots, vehicle);
//console.log(result);
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));