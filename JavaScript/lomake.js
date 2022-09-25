function nimet() {
  var etunimi = document.getElementById('enimi').value;
  var sukunimi = document.getElementById('snimi').value;
  if (etunimi.length < 1 || sukunimi.length < 1) {
    alert("Et antanut tarvittavia tietoja. Anna ne!");
  } else {
    document.getElementById('vastaus').innerHTML = "Moikka " + etunimi + " " + sukunimi + "!";
  }
}
