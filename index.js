function dwarfRollCall(dwarves) {
  var dwarfArray = [];
  for (var i = 0; i < dwarves.length; i++) {
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
        foods[i] === "camembert") {
      return foods[i];
      }
    }
      return "no cheese!";
  } 