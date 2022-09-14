function esimerkkiTaulukko() {
  var autot = [];
  var caarat = ["Tesla", "VW i3", "Hyundai ionic"];
  autot.push("Jeep");
  document.write("Caara[1] = " + caarat[1] + "/ autot[0] = " + autot[0] + "<br>");
  document.write("Caara = " + caarat + "<br>");
  document.write("Autot = " + autot + "<br>");
  var siirrettava = caarat.pop();
  document.write("Siirrettävä on " + siirrettava);
  document.write("<br> Caarat taulukko on " + caarat);
  autot.unshift(siirrettava);
  document.write("<br> Autot taulukko = " + autot);
  document.write("<br> Caarat taulukko = " + caarat + "<br> Autot taulukko = " + autot);
}
