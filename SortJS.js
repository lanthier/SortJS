function quicksort(A) {
  if(A.length  <= 1) return A;
  var pivot = A.splice(Math.floor(Math.random() * A.length), 1), left = [], right = [];
  while(A.length != 0) pivot[0] > A[0] ? left.push(A.shift()) : right.push(A.shift());
  return quicksort(left).concat(pivot.concat(quicksort(right)));
}

function mergeSort(a) {
	if(a.length <= 1) return a;
	var middle = Math.floor(a.length/2);
	var b = [], c = [];
	for(var i=0; i<a.length; i++) i < middle ? b.push(a[i]) : c.push(a[i]);
	a = merge(mergeSort(b),mergeSort(c));
	return a;
  function merge(b,c) {
  	var a = [];
  	while(b.length!=0 || c.length!=0) {
  		if(b.length==0) a.push(c.shift());
  		else if(c.length==0) a.push(b.shift());
  		else  b[0] > c[0] ? a.push(c.shift()) : a.push(b.shift());
  	}
  	return a;
  }
}
