//my code

function solution(s) {
	let answer = ''
	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i].toUpperCase()) {
			answer += s[i].toLowerCase()
		} else {
			answer += s[i].toUpperCase()
		}
	}
	return answer
}

console.log(solution('study'))

//solution code

function solution(s) {
	let answer = ''
	for (let x of s) {
		if (x === x.toUpperCase()) {
			answer += x.toLowerCase()
		} else {
			answer += x.toUpperCase()
		}
	}
	return answer
}

console.log(solution('study'))
