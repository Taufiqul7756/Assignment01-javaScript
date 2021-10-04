function kilometerToMeter(n) {
  if (n > 0) {
    var cal = n * 1000;
    return cal;
  } else {
    return "distance cant negative";
  }
}

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

function megaFriend(string) {
  var str = string.split(" ");
  var longest = 0;
  var word = null;
  for (var i = 0; i < str.length; i++) {
    if (longest < str[i].length) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
}

//KM to Meter---------------------------
var result = kilometerToMeter(12);
console.log("Kilometer to meter convertion :", result);

// Budget Calculator -----------------------
var result = budgetCalculator(5);
console.log("Total Budget:", result);

// Hotel Cost ------------
var result = hotelCost(21);
console.log("Hotel Cost: ", result);

//Mega Friend name find
var result = megaFriend("Tawzar Kafil Milon Taufique Ridu Saiful");
console.log("Big Named friend: ", result);
