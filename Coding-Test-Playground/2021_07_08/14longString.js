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
