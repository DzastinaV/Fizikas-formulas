/*function myFunction(){
let text;
  let person = prompt("Lūdzu ievadiet savu vārdu:");
  if (person == null || person == "") {
    text = alert("Laipni lūgti!");
  } else {
    text = alert("Laipni lūgti,"+person+"!");
  }
} */

let person = prompt("Please enter your name");
let text;
if (person == null || person == "") {
  text = alert("Laipni lūgti!");
} else {
  text = alert( "Laipni lūgta/s, " + person + "!");
}