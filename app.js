var log = function log(data) {
  "use strict";
  window.console.log(data);
};

var calculatrice = function calculatrice() {
  "use strict";
  console.log("ready !");

  var btn, saisie, add, sub, mult, div;

  btn = document.getElementById("btn");
  saisie = document.getElementById("ma_saisie");

  log(btn);
  log(saisie);

  // ici nous avons une autre façon de l'écrire
  //btn.onclick = function click() {
  //log("click 1");
  //}; //un objet lorsqu'il y a un point

  function genererClicks() {
    log("click 2");
    log(saisie.value);
    var res = add(10, 10);
    log(res);
    // var res2 = sub(10, 10);
  }

  function add(a, b) {
    return  a + b;
  }

  // function sub(a, b) {
  //   return a - b;
  // }
  //Une instruction fini par un point virgule, pour function si on en met il va y avoir une erreur

  btn.onclick = genererClicks;
  // ici nous avons une autre façon de l'écrire
  //btn.addEventListener("click", genererClicks);

};
