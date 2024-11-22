var qouteWords = [
  `"Resentment is like drinking poison and waiting for your enemies to die."`,
  `"The best revenge is massive success."`,
  `"You miss 100% of the shots you don't take."`,
  `"It's not what happens to you, but how you react to it that matters."`,
];

function display() {
  var cartona = "";
  var om1 = Math.floor(Math.random() * 4);
  for (var i = 0; i <= qouteWords.length; i++) {
    if (om1 === i) {
      cartona += qouteWords[i];
    }
  }
  document.getElementById("qouteWords").innerHTML = cartona;
}

var z = [
  `--Wayne Gretzy`,
  `--Epictetus`,
  `--Nelson Mandela`,
  `--Frank Sinatra`,
];

function add() {
  var cartonaa = "";
  var c = Math.floor(Math.random() * 4);
  for (var d = 0; d <= z.length; d++) {
    if (c === d) {
      cartonaa += z[d];
    }
  }
  document.getElementById("quoteName").innerHTML = cartonaa;
}
