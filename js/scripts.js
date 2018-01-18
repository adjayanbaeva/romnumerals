

var romanSymbols = [["M", 1000], ["D", 500], ["C", 100],
["L", 50], ["X", 10], ["V", 5], ["I", 1]];

function toRomanNumeral(number){
  if(typeof number === "number" && number < 4000 && number > 0){
    var unformattedOutput = "";

    var currentNumber = number;

    while(currentNumber !== 0){
      var currentNumeral = findLargestNumeral(currentNumber);
      var numeralRepeats = Math.floor(currentNumber / currentNumeral[1]);

      currentNumber = currentNumber % currentNumeral[1];
      unformattedOutput += currentNumeral[0].repeat(numeralRepeats);
      // debugger;
    }

    // var firstNumeral = findLargestNumeral(number);
    // var firstCopies = Math.floor(number / firstNumeral[1]);
    return unformattedOutput;
  }
}

function findLargestNumeral(number){
  var largestNumeral;
  romanSymbols.forEach(function(numeral){
    if(largestNumeral === undefined && numeral[1] <= number){
      largestNumeral = numeral;
    }
  });
  return largestNumeral;
}

$(document).ready(function(){
  $("#converter").submit(function(event) {
    event.preventDefault();

    var userInput = $("#input-number").val();
    $("#output").show()
  });
});
