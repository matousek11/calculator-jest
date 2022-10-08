function Vypocet() {
  let a = parseInt(document.getElementById("cislo1").value);
  let b = parseInt(document.getElementById("cislo2").value);
  let operace = document.getElementById("operace").value;
  let vysledek = document.getElementById("vysledek");

  if (a == "" || b == "") {
  } else {
    switch (operace) {
      case "+":
        vysledek.innerHTML = Soucet(a, b);
        break;

      case "-":
        vysledek.innerHTML = Rozdil(a, b);
        break;

      case "*":
        vysledek.innerHTML = Soucin(a, b);
        break;

      case "/":
        vysledek.innerHTML = Podil(a, b);
        break;
    }
  }
}

function Soucet(a, b) {
  return a + b;
}

function Rozdil(a, b) {
  return a - b;
}

function Soucin(a, b) {
  return a * b;
}

function Podil(a, b) {
  if (b != 0) return a / b;
}
