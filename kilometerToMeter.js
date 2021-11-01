function kilometerToMeter(Kilometer) {
  if (Kilometer > 0) {
    var cal = Kilometer * 1000;
    return cal;
  } else {
    return "distance cant negative";
  }
}
var result = kilometerToMeter(12);
console.log("Kilometer to meter convertion :", result);
