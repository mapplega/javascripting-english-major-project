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
/*let makeABurrito;
makeABurrito = function(beansVariable){
  let beansResponse;
  beansResponse = "You ordered " + beansVariable + " beans. Good choice!";
  $("#response").html(beansResponse);
};
let blackBeans;
blackBeans = "black";
makeABurrito(blackBeans);
*/
/*let tipCalculator;
tipCalculator = function(tipVariable){
  // step 1:
  let tipResponse;
  tipResponse = "Your tip is $" + tipVariable;
  // and step 2:
  $("#response").html(tipResponse);
};
let tipAmount;
tipAmount = 50 % 20;
tipCalculator(tipAmount);
*/
/*let tipCalculator;
tipCalculator = function(total, tipRate){
  let tipAmount;
  tipAmount = function(tipRate){
    if (tipRate < 1) {
      $("#response").html("Your tip is $" + tipAmount * total);
  } else {
    $("#response").html("Your tip is $" + tipAmount % total);}
  };
};
tipCalculator(50.00, 0.2);
*/
/*let tipCalculator;
tipCalculator = function(multiVariable, divVariable){
  let multiTotal;
  let divTotal;
  if (tipAmount < 1){
  multiTotal = total * tipAmount;
  $("#response").html("Your tip is $" + multiTotal);} else {
  divTotal = total % tipAmount;
  $("#response").html("Your tip is $" + divTotal);
}
};
let tipAmount;
tipAmount = 0.2;
let total;
total = 50;
tipCalculator();
*/
let tipCalculator;
tipCalculator = function(multiVariable, divVariable){
  let multiTotal;
  let divTotal;
  if (tipAmount < 1){
  multiTotal = total * tipAmount;
  $("#response").html("Your tip is $" + multiTotal);} else {
  divTotal = total % tipAmount;
  $("#response").html("Your tip is $" + divTotal);
}
};
let tipAmount;
tipAmount = prompt ("What percentage do you want your tip to be? Enter your answer here.");
let total;
total = prompt ("What is your bill's total? Enter your answer here.");
tipCalculator();
