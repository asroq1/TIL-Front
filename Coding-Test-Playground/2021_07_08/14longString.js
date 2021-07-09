//my code

function solution(s) {
	let answer = '',
		max = Number.MIN_SAFE_INTEGER
	for (let i = 0; i < s.length; i++) {
		if (s[i].length > max) {
			max = s[i].length
			answer = s[i]
		}
	}
	return answer
}
let str = ['teacher', 'time', 'student', 'beautifullll', 'gooddddddddd!!!!']
console.log(solution(str))

//solution code

function solution(s) {
	let answer = '',
		max = Number.MIN_SAFE_INTEGER
	for (let x of s) {
		if (x.length > max) {
			max = x.length
			answer = x
            
		}
	}
	return answer
}
let str = ['teacher', 'time', 'student', 'beautifullll', 'gooddddddddd!!!!']
console.log(solution(str))
