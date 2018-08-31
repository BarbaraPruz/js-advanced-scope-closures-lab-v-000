function produceDrivingRange(range) {

  return function (start, end) {
    let dist = Math.abs(parseInt(start)-parseInt(end));
    if (dist <= range) {
      return `within range by ${range-dist}`;
    }
    else {
      return `${dist-range} blocks out of range`;
    }
  }
}
