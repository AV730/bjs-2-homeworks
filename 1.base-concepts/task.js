"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d;

	d = Math.pow(b, 2) - 4 * a * c;

	if (d === 0) {
		arr[0] = -b / (2 * a);
	}
	else if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent       = Number(percent);
  contribution  = Number(contribution);
  amount        = Number(amount);
  countMonths   = Number(countMonths);

  // Если параметр функции будет строкой, то попытайтесь преобразовать в число. Во всех остальных случаях возвращайте false
  if(typeof percent !== 'number' || typeof contribution !== 'number' || typeof amount !== 'number' || typeof countMonths !== 'number') {
    return false;
  }

  let monthPercent  = percent / 100 / 12;
  let creditBody    = amount - contribution;
  let payment       = creditBody * (monthPercent + (monthPercent / ((Math.pow((1 + monthPercent), countMonths)) - 1)));
  let totalAmount   = Number((payment * countMonths).toFixed(2));
  
  return totalAmount;
}