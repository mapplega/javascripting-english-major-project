/*
let i;
i = 1;
while ( i < 2 ) {
  $("#response").html("<br />" + i + " is odd ");
  i = i + 1;
}
while ( i === 2 ) {
  $("#response").append("<br />" + i + " is even ");
  i = i + 1;
}
while ( i === 3 ) {
  $("#response").append("<br />" + i + " is odd ");
  i = i + 2;
}
*/
/*
for (let i = 1; i <= 4; i = i + 1) {
  $("#response").append("<br />" + i);
}
*/
/*let userInput;
userInput = prompt("Pick a number.", "Type your answer here.");
for (let i = 1; i <= userInput; i = i + 1)
if ( i % 2 == 0) {
  $("#response").append("<br />" + i + " is even.");
} else {
  $("#response").append("<br />" + i + " is odd.")
};
*/
let tipCalculator;
tipCalculator = function(total, tipRtate){
  tipAmount = tipRate * total;
  $("#response").html("Your tip is $" + tipAmount);
};
tipCalculator(50.00, 0.2);
