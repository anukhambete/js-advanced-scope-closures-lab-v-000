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

