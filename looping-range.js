var range = function(start, end, step) {
  var range = [];
  var typeofStart = typeof start;
  var typeofEnd = typeof end;

  if (step === 0) {
    return range;
  }

  if (typeofStart == "undefined" || typeofEnd == "undefined") {
    return range;
  } else if (typeofStart != typeofEnd) {
    return range;
  }

  typeof step == "undefined" && (step = 1);

  if (end < start) {
    step = -step;
  }

  if (typeofStart == "number") {

    while (step > 0 && end >= start) {
      range.push(start);
      start += step;
    }

  } 

  return range;

}



