"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let D;

	D = Math.sqrt(b) - 4 * a * c;

	if (D === 0) {
		arr[0] = -b / (2 * a);
	}
	elseif(D > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}