// my code
function solution(a, b, c) {
	let answer = 'YES',
		max
	let total = a + b + c
	if (a <= b + c && b <= c + a && c <= a + b) {
		answer
	} else {
		answer = 'NO'
	}
	return answer
}

console.log(solution(24, 210, 207))

// solution code

function solution(a, b, c) {
	let answer = 'YES',
		max
	let sum = a + b + c
	if (a > b) {
		max = a
	} else {
		max = b
	}
	if (c > max) {
		max = c
	}
	if (sum - max <= max) {
		answer = 'NO'
	}
	return answer
}

console.log(solution(24, 210, 107))
