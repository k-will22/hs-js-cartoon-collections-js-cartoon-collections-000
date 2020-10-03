// function accepts "dwarves" as parameter
function dwarfRollCall(dwarves) {
  // empty array is declared
  var dwarfArray = [];
  // for loop interates through the entire "dwarves" array
  for (var i = 0; i < dwarves.length; i++) {
  /* individual dwarf names are added to the end of "dwarfArray" 
  with the actual position number and dwarf name */
    dwarfArray.push(`${i+1}. ${dwarves[i]} `);
  }  // full dwarfArray is returned as a string
     return dwarfArray.join("");
}

// fuction accepts "planeteerCalls" as parameter
function summonCaptainPlanet(planeteerCalls){
  // empty array is declared
  var callsArray = [];
  // for loop interates through entire "planeteerCalls" array
  for (var i = 0; i < planeteerCalls.length; i++) {
    /* individual calls are added to the end of "callsArray"
    in all caps with an exclamation point after each call */
    callsArray.push(`${planeteerCalls[i].toUpperCase()}!`); 
   } // returns full array of calls
     return callsArray;
}

// function accepts "words" as parameter
function longPlaneteerCalls(words) {
  // for loop interates through entire "words" array
  for(var i = 0; i < words.length; i++) {
    /* if any of the individual calls has a string length
    of more than 4 characters then true value is returned */
    if (words[i].length > 4) {
      return true;
      }
    } /* if none of the calls are more than 4 characters 
      then false value is returned */
      return false;
}

// function accepts "foods" as parameter
function findTheCheese (foods) {
  // for loop interates through entire "foods" array
  for (var i = 0; i < foods.length; i++) {
    /* logical operator checks if any of the individual
    foods is one of the listed cheeses. If yes, then the 
    name of that cheese is returned */
    if (foods[i] === "cheddar" ||
        foods[i] === "gouda" ||
        foods[i] === "camembert") {
      return foods[i];
      }
    } /* if no cheeses are found in the array 
      then "no cheese!" string is returned */
      return "no cheese!";
  } 