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
    const result = window.confirm("Vai Jūs gribat šajā lapā palikt?");
    if (!result) {
      window.alert("Uzredzēšanos!");
      window.location.href = "about:blank";
    }
  }