function budgetCalculator(n) {
  //   var watch = 50;
  //   var phone = 100;
  //   var laptop = 500;
  var watch = n * 50;
  var phone = n * 100;
  var laptop = n * 500;
  var total = watch + phone + laptop;
  return total;
}

var result = budgetCalculator(5);
console.log("Total:", result);
