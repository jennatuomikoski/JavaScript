var terve = "maailma";
function heippa(terve) {
  var sana = "hei ";
  alert(sana + terve + "!");
}
function onkoSamat(lu1, lu2) {
  if (lu1 == lu2) {
      alert("Luvut ovat samat!");
  } else {
  alert("Luvut eivät ole samat!");
  }
}
function luvunKoko(luk1) {
  if (luk1 < 0) {
    alert("Luku on negatiivinen");
  } else if (luk1 < 1000) {
    alert("Luku on pienempi kuin 1000");
  } else {
    alert("Luku on suurempi tai yhtäsuuri kuin 1000");
  }
}
function eriSuuret(num1, num2) {
  if (num1 != num2) {
    alert("Luvut ovat erisuuret")
  } else {
    alert("Luvut ovat samat!")
  }
}
function jaTesti(x1) {
  if (x1 >= 100 && x1 <= 200) {
    alert("Luku on lukujen 100 ja 200 välissä");
  } else {
    alert("Luku ei ole 100 ja 200 välissä");
  }
}
function taiTesti(x2) {
  if (x2 < 100 || x2 > 200) {
    alert("Luku on pienempi kuin 100 tai isompi kuin 200");
  } else {
    alert("Luku on 100 ja 200 välissä");
  }
}
