function produceDrivingRange(range) {

  return function (start, end) {

    let dist = Math.abs(parseInt(start)-parseInt(end));
    console.log("start",start,"end",end);
    console.log("dist",dist,"range",range);
    if (dist <= range) {
      return `within range by ${dist}`;
    }
    else {
      return `${dist} blocks out of range`;
    }
  }
}
