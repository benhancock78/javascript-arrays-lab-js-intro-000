var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function  destructivelyAppendKitten() {
kittens.push('Ralph');
return kittens;
}

function  destructivelyPrependKitten()  {
kittens.unshift('Bob');
return kittens;
}

function  destructivelyRemoveLastKitten() {
kittens.pop();
return  kittens;
}

function  destructivelyRemoveFirstKitten()  {
kittens.shift()
return kittens;
}
//problem
function  appendKitten()  {
  var newKittens = [...kittens, "Broom"];
  return newKittens;
}
//problem
function  prependKitten() {
  var newKittens = "Arnold");
  return  newKittens;
}
function  removeLastKitten()  {
  kittens.pop();
  kittens;
}

function  removeFirstKitten() {

}
