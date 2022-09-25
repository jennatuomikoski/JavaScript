function tarkista() {
  var etunimi = document.getElementById('enimi').value;
  var sukunimi = document.getElementById('snimi').value;
  var koulu = document.getElementsByName('kouluun');
  var kouluun;
  for(var i = 0; i < koulu.length; i++) {
    if(koulu[i].checked) {
      kouluun = koulu[i].value;
    }
  }
  if(etunimi == "" || sukunimi == "") {
    return alert("Et syöttänyt tarvittavia tietoja, ole hyvä ja syötä ne!");
  }
  var valitse = document.getElementById('lempi');
  var valinta = valitse.options[valitse.selectedIndex].value;


  document.getElementById('laheta').innerHTML = "Moikka " + etunimi + " " + sukunimi + "<br> Tulit tänään kouluun " + kouluun + "<br> ja lempi tuntisi koulussa on " + valinta + "."
}
