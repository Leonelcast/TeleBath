var estadoH = document.getElementById("estadoBañoH");
var estadoM = document.getElementById("estadoBañoM");
var nextWord = (function () {
  var wordArray = ['Baño ocupado', 'Baño desocupado'];
  var count = -1;
  return function () {
    return wordArray[++count % wordArray.length];
  }
}());
var nextTurn = (function () {
  var wordArray = ['Baño ocupado', 'Baño desocupado'];
  var count = -1;
  return function () {
    return wordArray[++count % wordArray.length];
  }
}());


var MenTurn = (function () {
  var wordArray = ['Turno No.1', 'Turno No.2', 'Turno No.3', 'Turno No.4', 'Turno No.5', 
  'Turno No.6', 'Turno No.7', 'Turno No.8', 'Turno No.9', 'Turno No.10', 'Tomar turno'];
  var count = -1;
  return function () {
    return wordArray[++count % wordArray.length];
  }
}());
var WomenTurn = (function () {
  var wordArray = ['Turno No.1', 'Turno No.2', 'Turno No.3', 'Turno No.4', 'Turno No.5', 
  'Turno No.6', 'Turno No.7', 'Turno No.8', 'Turno No.9', 'Turno No.10', 'Tomar turno'];
  var count = -1;
  return function () {
    return wordArray[++count % wordArray.length];
  }
}());