alert("Laipni lūgti pirmajā lapā!");

    var time = new Date().getHours();
if (time < 10) {
  alert("Labrīt!");
} else if (time < 20) {
  alert("Labdien!");
} else {
  alert("Labvakar!");
}