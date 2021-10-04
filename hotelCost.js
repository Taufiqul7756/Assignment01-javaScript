function hotelCost(days) {
  if (days <= 10) {
    var packTotal = days * 100;
    //return package01;
  } else if (days <= 20) {
    var first10 = 10 * 100;
    var remaining = days - 10;
    var package02 = remaining * 80;
    var packTotal = first10 + package02;
    //return pack02Total;
  } else {
    var first10 = 10 * 100;
    var second20 = 10 * 80;
    var remaining = days - 20;
    var package03 = remaining * 50;
    var packTotal = first10 + second20 + package03;
    //return pack03Total;
  }
  return packTotal;
}

var result = hotelCost(21);
console.log(result);
