let points = [];
for (let x = 1; x <= 500; x++) {
	points.push(x);
}

console.log(points);

for (let i = points.length-1; i > 0; i--) {
	let j = Math.floor(Math.random() * 	(i+1));
	let k = points[i];
	points[i] = points[j];
	points[j] = k;
}

console.log(points);