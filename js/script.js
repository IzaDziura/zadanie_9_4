var drawTree = prompt('Podaj wysokość');

for (var i = 0; i < drawTree; i++) {
	var star = '';
	var space = '';

	for (var k = i; k < 0; k--) {
		space += ' ';
	}

	for (var j = 0; j < i * 2; j++) {
			star += '*';
	}
	console.log(space + star);
}