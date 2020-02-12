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
