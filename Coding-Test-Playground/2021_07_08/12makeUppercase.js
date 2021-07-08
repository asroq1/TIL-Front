//my code

function solution(s) {
	let answer = ''
	for (let i = 0; i < s.length; i++) {
		answer += s[i].toUpperCase()
	}
	return answer
}

let str = 'ItisTimeToStudy'
console.log(solution(str))

// solution code 1

function solution(s) {
	let answer = ''
	for (let x of s) {
		if (x === x.toLowerCase()) {
			answer += x.toUpperCase()
		} else {
			answer += x
		}
	}
	return answer
}

let str = 'ItisTimeToStudy'
console.log(solution(str))

// solution code 1

function solution(s) {
	let answer = ''
	for (let x of s) {
		let num = x.charCodeAt()
		if (num >= 97 && num <= 122) {
			answer += String.fromCharCode(num - 32)
		} else {
			answer += x
		}
	}
	return answer
}

let str = 'ItisTimeToStudy'
console.log(solution(str))
