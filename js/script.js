/*var drawTree = prompt('Podaj wysokość');*/

function drawTree (z) {

for (var i = 0; i < z; i++) {
	var star = '';
	var space = '';

	for (var k = i; k < z; k++) {
		space += ' ';
	}

	for (var j = 0; j < i * 2; j++) {
			star += '*';
	}
	console.log(space + star);
	}
};

