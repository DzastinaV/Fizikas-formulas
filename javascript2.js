alert("Laipni lūgti pirmajā lapā!");

    var time = new Date().getHours();
if (time < 10) {
  alert("Labrīt!");
} else if (time < 20) {
  alert("Labdien!");
} else {
  alert("Labvakar!");
}


  const homepageURL = window.location.href;
  function onPageLoad() {
    const result = window.confirm("Vai Jums patīk šī lapa?");
    if (!result) {
      window.alert("Uzredzēšanos!");
      window.location.href = "about:blank";
    }
  }