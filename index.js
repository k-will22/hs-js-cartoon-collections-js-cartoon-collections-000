// function declared. Accepts one parameter named "dwarves"
function dwarfRollCall(dwarves) {
  
  // empty array is declared. Named "dwarfArray"
  var dwarfArray = [];
  
  // for loop interates through entire "dwarves" array
  for (var i = 0; i < dwarves.length; i++) {
    
    /* individual dwarf names are added to the end of
    "dwarfArray" with the actual position number and dwarf name*/
     dwarfArray.push(`${i+1}. ${dwarves[i]} `);
  }  
       // full dwarfArray is returned as a string
       return dwarfArray.join("");
}


// fuction declared. Accepts one parameter named "planeteerCalls"
function summonCaptainPlanet(planeteerCalls){
  
  // empty array is declared. Named "callsArray"
  var callsArray = [];
  
  // for loop interates through entire "planeteerCalls" array
  for (var i = 0; i < planeteerCalls.length; i++) {
    
    /* individual calls are added to the end of "callsArray"
    in all caps with an exclamation point after each call */
    callsArray.push(`${planeteerCalls[i].toUpperCase()}!`); 
   } 
     // returns full array of calls
       return callsArray;
}


// function declared. Accepts one parameter named "words"
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


// function declared. Accepts one parameter named "foods"
function findTheCheese (foods) {
  
  // for loop interates through entire "foods" array
  for (var i = 0; i < foods.length; i++) {
    
    /* logical operator is used to check if any of the 
    individual foods is one of the listed cheeses. 
    If yes, then the name of that cheese is returned */
    if (foods[i] === "cheddar" ||
        foods[i] === "gouda" ||
        foods[i] === "camembert") {
      return foods[i];
      }
    } /* if no cheeses are found in the array 
      then "no cheese!" string is returned */
      return "no cheese!";
  } 
  
  
function dwarfRollCall(dwarves) {
  var dwarfArray = [];
  for (var i = dwarves.length / 2; i < dwarves.length; i++) {
    dwarfArray.push(`${i+1}. ${dwarves[i]} `);
  }  
     return dwarfArray.join("");
}

function summonCaptainPlanet(planeteerCalls){
  var callsArray = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    callsArray.push(`${planeteerCalls[i].toUpperCase()}!`); 
   } 
     return callsArray;
}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
      }
    } 
      return false;
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar" ||
        foods[i] === "gouda" ||
        foods[i] === "camembert" ||
        foods[i] === "swiss") {
      return foods[i];
      }
    } 
      return "no cheese!";
  } 
  
  function wordsWithB () {
    var bNames = [];
    for (var i = 0; i < names.length; i++) {
      if ( names[i].startsWith('B') || names[i].startsWith('b')) {
        bNames.push(names[i]);
      }
    }
    return bNames;
  }