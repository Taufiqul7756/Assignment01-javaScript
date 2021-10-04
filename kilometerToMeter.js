function kilometerToMeter(n) {
  if (n > 0) {
    var cal = n * 1000;
    return cal;
  } else {
    return "distance cant negative";
  }
}
var result = kilometerToMeter(12);
console.log("Kilometer to meter convertion :", result);
