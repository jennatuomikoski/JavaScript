function tehtava1() {
  var luku1 = parseInt(document.getElementById('eka').value);
  var luku2 = parseInt(document.getElementById('toka').value);
  var luku3 = parseInt(document.getElementById('kolmas').value);

  if (luku1 < luku2 && luku1 < luku3) {
    if (luku2 < luku3) {
      return document.getElementById('vastaus1').innerHTML = "Annoit luvut: " + luku1 + ", " + luku2 + " ja " + luku3;
    } else {
      return document.getElementById('vastaus1').innerHTML = "Annoit luvut: " + luku1 + luku3 + luku2;
    }
  } else if (luku2 < luku1 && luku2 < luku3) {
    if (luku1 < luku2) {
      return document.getElementById('vastaus1').innerHTML = "Annoit luvut: " + luku2 + ", " + luku1 + " ja " + luku3;
    } else {
      return document.getElementById('vastaus1').innerHTML = "Annoit luvut: " + luku2 + ", " + luku3 + " ja " + luku1;
    }
  } else if (luku3 < luku1 && luku3 < luku2) {
    if (luku1 < luku2) {
      return document.getElementById('vastaus1').innerHTML = "Annoit luvut: " + luku3 + ", " + luku1 + " ja " + luku2;
    } else {
      return document.getElementById('vastaus1').innerHTML = "Annoit luvut: " + luku3 + ", " + luku2 + " ja " + luku1;
    }
  }
}

function tehtava2() {
  var lu1 = parseInt(document.getElementById('luku1').value);
  var lu2 = parseInt(document.getElementById('luku2').value);
  var lu3 = parseInt(document.getElementById('luku3').value);
  var lu4 = parseInt(document.getElementById('luku4').value);
  var lu5 = parseInt(document.getElementById('luku5').value);

  if (lu1 > lu2 && lu1 > lu3 && lu1 > lu4 && lu1 > lu5) {
    return document.getElementById('vastaus2').innerHTML = "Suurin luku on " + lu1;
  } else if (lu2 > lu3 && lu2 > lu4 && lu2 > lu5) {
    return document.getElementById('vastaus2').innerHTML = "Suurin luku on " + lu2;
  } else if (lu3 > lu4 && lu3 > lu5) {
    return document.getElementById('vastaus2').innerHTML = "Suurin luku on " + lu3;
  } else if (lu4 > lu5) {
    return document.getElementById('vastaus2').innerHTML = "Suurin luku on " + lu4;
  } else {
    return document.getElementById('vastaus2').innerHTML = "Suurin luku on " + lu5;
  }
}

function tehtava3() {
  var num = parseInt(document.getElementById('pari').value);
  if (num % 2) {
    return document.getElementById('vastaus3').innerHTML = "Luku on pariton";
  } else {
    return document.getElementById('vastaus3').innerHTML = "Luku on parillinen";
  }
}
function tehtava4() {
  var age = parseInt(document.getElementById('ika').value);
  if (age < 16) {
    return document.getElementById('vastaus4'). innerHTML = "Saat ajaa polkupyörää";
  } else if (age < 18) {
    return document.getElementById('vastaus4'). innerHTML = "Saat ajaa mopoa";
  } else {
    return document.getElementById('vastaus4'). innerHTML = "Saat ajaa autoa";
  }
}
function tehtava5() {
  var kieli = document.getElementById('valitse').value;
  if (kieli == "englanti") {
    document.getElementById('vastaus5').innerHTML = "Hello world"
  } else if (kieli == "ruotsi") {
    document.getElementById('vastaus5').innerHTML = "Hej världen"
  } else {
    document.getElementById('vastaus5').innerHTML = "Hola mundo"
  }
}
