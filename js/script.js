var drawTree = prompt('Podaj wysokość');

for (var i = 0; i < drawTree; i++) {
	var star = '';
	for (var j = 0; j < i; j++) {
			star += "*";
	}
	console.log(star);
}