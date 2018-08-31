function produceDrivingRange(range) {

  return function (start, end) {
    let dist = Match.abs(parseInt(start)-parseInt(end));
    if (dist <= range) {
      return `within range by ${dist}`;
    }
    else {
      return `${dist} blocks out of range`;
    }
  }
}
