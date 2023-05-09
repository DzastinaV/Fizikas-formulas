let person = prompt("Please enter your name");
let text;
if (person == null || person == "") {
  text = alert("Laipni lūgti!");
} else {
  text = alert( "Laipni lūgta/s, " + person + "!");
}
