function tehtava1() {
  var num = document.getElementById('luku').value;
  if (num >= 0) {
    return document.getElementById('vastaus1').innerHTML = "Luku on positiivinen";
  } else {
    return document.getElementById('vastaus1').innerHTML = "Luku on negatiivinen";
  }
}

function tehtava2() {
  var pva;
  var vkp = document.getElementById('paiva').value;
    switch (vkp) {
      case "1":
        pva = "Maanantai";
        break;
      case "2":
        pva = "Tiistai";
        break;
      case "3":
        pva = "Keskiviikko";
        break;
      case "4":
        pva = "Torstai";
        break;
      case "5":
        pva = "Perjantai";
        break;
      case "6":
        pva = "Lauantai";
        break;
      case "7":
        pva = "Sunnuntai";
        break;
      default:
        pva = "Et antanut viikonpäivän numeroa!"
    }
document.getElementById('vastaus2').innerHTML = pva;
}

function tehtava3() {
  var vluku = document.getElementById('vuosi').value;
  if ((0 == vluku % 4) && (0 != vluku % 100) || (0 == vluku % 400)) {
    return document.getElementById('vastaus3').innerHTML = vluku + " vuosi on karkausvuosi"
  } else {
    return document.getElementById('vastaus3').innerHTML = vluku + " vuosi ei ole karkausvuosi"
  }
}

function tehtava4() {
  var yksi = parseInt(document.getElementById('eka').value);
  var kaks = parseInt(document.getElementById('toka').value);
  var kolm = parseInt(document.getElementById('kolmas').value);
  var neli = parseInt(document.getElementById('neljas').value);
  var viis = parseInt(document.getElementById('viides').value);
  var summa = yksi + kaks + kolm + neli + viis;
  var ka = summa / 5;
  document.getElementById('vastaus4').innerHTML = "Lukujen summa on: " + summa + " ja keskiarvo on: " + ka;
}

function tehtava5() {
  var numer = document.getElementById('luku2').value;
  var lause = "";
    for (var i = 0; i < numer.length; i++) {
      lause += numer + "x1 = " + numer * 1 + ", ";
      lause += numer + "x2 = " + numer * 2 + ", ";
      lause += numer + "x3 = " + numer * 3 + ", ";
      lause += numer + "x4 = " + numer * 4 + ", ";
      lause += numer + "x5 = " + numer * 5 + ", ";
      lause += numer + "x6 = " + numer * 6 + ", ";
      lause += numer + "x7 = " + numer * 7 + ", ";
      lause += numer + "x8 = " + numer * 8 + ", ";
      lause += numer + "x9 = " + numer * 9 + ", ";
      lause += numer + "x10 = " + numer * 10;
    }

  document.getElementById('vastaus5').innerHTML = lause;
}
