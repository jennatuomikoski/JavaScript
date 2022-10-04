  var nums = [22, 41, 45, 3, 33];
function pieninSuurin() {
  nums.sort(function(a, b){return a - b});
  var pienin = nums[0];
  var suurin = nums[nums.length-1];
  return document.getElementById('vastaus1').innerHTML = "Pienin numero on " + pienin + " suurin numero on " + suurin;
}

function rillinenRiton() {
  var luku = document.getElementById('pari').value;
  if (luku % 2) {
    return document.getElementById('vastaus2').innerHTML = "Luku on pariton";
  } else {
    return document.getElementById('vastaus2').innerHTML = "Luku on parillinen";
  }
}
function kuukausi() {
  var kk = document.getElementById('kuuk').value;
  switch (kk) {
    case "1":
      document.getElementById('vastaus3').innerHTML = "Tammikuu";
      break;
    case "2":
      document.getElementById('vastaus3').innerHTML = "Helmikuu";
      break;
    case "3":
      document.getElementById('vastaus3').innerHTML = "Maaliskuu";
      break;
    case "4":
      document.getElementById('vastaus3').innerHTML = "Huhtikuu";
      break;
    case "5":
      document.getElementById('vastaus3').innerHTML = "Toukokuu";
      break;
    case "6":
      document.getElementById('vastaus3').innerHTML = "Kesäkuu";
      break;
    case "7":
      document.getElementById('vastaus3').innerHTML = "Heinäkuu";
      break;
    case "8":
      document.getElementById('vastaus3').innerHTML = "Elokuu";
      break;
    case "9":
      document.getElementById('vastaus3').innerHTML = "Syyskuu";
      break;
    case "10":
      document.getElementById('vastaus3').innerHTML = "Lokakuu";
      break;
    case "11":
      document.getElementById('vastaus3').innerHTML = "Marraskuu";
      break;
    case "12":
      document.getElementById('vastaus3').innerHTML = "Joulukuu";
      break;
    default:
      document.getElementById('vastaus3').innerHTML = "Et antanut oikeaa numeroa!"
  }
}
