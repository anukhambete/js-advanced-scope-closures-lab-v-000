function produceDrivingRange(blocks) {
  return function(start,end) {
	a = start.replace("th","");
	b = end.replace("th","");
	dist = parseInt(b,10)-parseInt(a,10);
  range = Math.abs(blocks - dist);
    if (dist <= blocks) {
	return `within range by ${range}`;
    } else {
	return `${range} blocks out of range`;
    };
  };
}

function produceTipCalculator(percent) {
	return function(amount) {
	return amount*percent;
    };
}

function createDriver() {
  let DriverId = 0;
  // return the class
  return class {
    constructor(name, manufacturePrice) {
      this.name = name;
      this.manufacturePrice = manufacturePrice;
      this.id = ++ItemId;
    }
 
    retailPrice(marketMultiplier) {
      return marketMultiplier * this.manufacturePrice;
    }
  };
}
