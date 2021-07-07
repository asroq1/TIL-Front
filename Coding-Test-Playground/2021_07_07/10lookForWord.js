// my code

function solution(s, t) {
	let answer = 0
	for (let i = 0; i < s.length; i++) {
		if (s[i] === t) {
			answer++
		}
	}
	return answer
}

let str = 'COMPUTERPROGRAMMINGRRRRR'
console.log(solution(str, 'R'))

//solution code
function solution(s, t) {
	let answer = s.split(t).length
	return answer - 1
}

let str2 = 'COMPUTERPROGRAMMINGRRRRR'
console.log(solution(str2, 'R'))

// 풀이 : split()메소드 안에 인자를 문자로 주면 해당 문자열에 인자 값이 있는 곳마다 배열로 반환된다.
// 그래서 만약 인자가 3개 있다면 4개의 인덱스가 반환된다. 한 개 더 많이 반환되기 때문에
// -1만 해주면 우리가 원하는 갯수를 얻을 수 있다.
