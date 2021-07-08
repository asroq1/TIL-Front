//my code
function solution(s) {
	let answer = ''
	let test = ''
	for (let i = 0; i < s.length; i++) {
		if (s.length % 2 === 0) {
			test += s[s.length / 2 - 1] + s[s.length / 2]
			answer += test
			return answer
		}
		if (s.length % 2 === 1) {
			console.log('doesn t work')
			answer += s[s.length]
			// console.log(test)
			return answer
		}
		return answer
	}
}
console.log(solution('study'))

//soultion code 1

function solution(s) {
	let answer = ''
	let mid = Math.floor(s.length / 2)
	if (s.length % 2 == 1) {
		answer = s.substring(mid, mid + 1)
	} else {
		answer = s.substring(mid - 1, mid + 1)
	}
	return answer
}
console.log(solution('study'))

//풀이 : substring() 메소드를 활용한다 substr()은 첫 번째 인자부터
// 두 번째 인자의 이전까지 뽑아낸다.

//soultion code 2

function solution(s) {
	let answer = ''
	let mid = Math.floor(s.length / 2)
	if (s.length % 2 == 1) {
		answer = s.substr(mid, 1)
	} else {
		answer = s.substr(mid - 1, 2)
	}
	return answer
}
console.log(solution('study'))

// 풀이 : substr()메소드는 첫 번째 인자부터 두 번째 인자의 값까지 뽑아낸다
