// my code

function solution(a, b, c) {
	let answer
	if (a < b && a < c) {
		answer = a
	} else if (b < a && b < c) {
		answer = b
	} else if (c < a && c < b) {
		answer = c
	}
	return answer
}
console.log(solution(2, 5, 11))

// solution code

function solution(a, b, c) {
	let answer
	if (a < b) {
		answer = a
	} else {
		answer = b
	}
	if (c < b) {
		answer = c
	}
	return answer
}
console.log(solution(22, 5, 11))
