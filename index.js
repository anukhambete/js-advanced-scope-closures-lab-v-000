function produceDrivingRange(blocks) {
  return function(start,end) {
	a = start.replace("th","");
	b = end.replace("th","");
	dist = parseInt(b,10)-parseInt(a,10);
  range = Math.abs(blocks - dist);
    if (dist <= blocks) {
	return true;
    } else {
	return `${dist} blocks out of range.`;
    };
  };
}
