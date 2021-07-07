//my code

function solution(s) {
	let answer = s.replace(/A/gi, '#')
	return answer
}

let str = 'BANANAAAAA'
console.log(solution(str))

//solution code 1
function solution(s) {
	let answer = ''
	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'A') {
			answer += '#'
		} else {
			answer += s[i]
		}
	}

	return answer
}

let str2 = 'BANANAAAAA'
console.log(solution(str2))

// 풀이 : for문을 활용해 s문자열의 문자가 문자 'A'와 같다면 빈 문자열 answer에 #을 더하고,
// 아니라면 answer에 s의 문자를 더한다 그렇게 해서 옳은 값을 가질 수 있다

//solution code 2
function solution(s) {
	let answer = s
	s = s.replace(/A/, '#')
	return answer
}

let str3 = 'BANANAAAAA'
console.log(solution(str3))

//풀이 : replace를 활용해 정규식 방법으로도 할 수 있다.
