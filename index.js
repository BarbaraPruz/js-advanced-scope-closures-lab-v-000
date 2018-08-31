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

function produceTipCalculator(tipPercent) {
  return function (total) {
    return total*tipPercent;
  }
}

function createDriver() {
  let driverId=0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
