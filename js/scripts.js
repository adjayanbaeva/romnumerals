

var romanSymbols = [["M", 1000], ["D", 500], ["C", 100],
["L", 50], ["X", 10], ["V", 5], ["I", 1]];

function toRomanNumeral(number){
  if(typeof number === "number" && number < 4000 && number > 0){
    var unformattedOutput = [];

    var currentNumber = number;

    while(currentNumber !== 0){
      var numeralIndex = findLargestNumeral(currentNumber);
      var currentNumeral = romanSymbols[numeralIndex];
      var numeralRepeats = Math.floor(currentNumber / currentNumeral[1]);

      currentNumber = currentNumber % currentNumeral[1];
      unformattedOutput.push([numeralIndex, numeralRepeats, romanSymbols[numeralIndex]]);
    }

    var formattedOutput = "";
    unformattedOutput.forEach(function(item, index){
      var currentNumeral = item[2];
      var currentIndex = item[0];
      var count = item[1];

      if(count === 4){
        var prevSymbol = formattedOutput[formattedOutput.length - 1];
        if ("VLD".includes(prevSymbol)){
          formattedOutput = formattedOutput.slice(0, -1);
          formattedOutput += currentNumeral[0];
          formattedOutput += romanSymbols[currentIndex-2][0];
        } else {
          formattedOutput += currentNumeral[0];
          formattedOutput += romanSymbols[currentIndex-1][0];
        }
      } else {
        formattedOutput += currentNumeral[0].repeat(count);
      }
    });

    return formattedOutput;
  }
}

function findLargestNumeral(number){
  var largestNumeral;
  romanSymbols.forEach(function(numeral, index){
    if(largestNumeral === undefined && numeral[1] <= number){
      largestNumeral = index;
    }
  });
  return largestNumeral;
}

$(document).ready(function(){
  $("#converter").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#input-number").val());
    var romanText = toRomanNumeral(userInput);
    if (romanText === undefined){
      $("#output h4").text("Please enter a number between 1 and 3999")
    } else {
      $("#output h4").text(toRomanNumeral(userInput));
    }
  });
});
