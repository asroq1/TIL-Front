function solution(s) {
	let answer = 0
	let regExp = /A-Z/gi
	let test = s.match(regExp)
	console.log(test)
	// for (let i = 0; i < s.length; i++) {
	// 	if (s[i] === String.charCodeAt(i)) {
	// 		console.log(s[i])
	// 		return answer++
	// 	}
	// }
	return answer
}

let str = 'KoreaTimeGoodGG'
console.log(solution(str))

//solution code 1

function solution(s) {
	let answer = 0
	// for (let x of s) {
	// 	if (x === x.toUpperCase()) {
	// 		answer++
	// 	}
	// }

	for (let i = 0; i < s.length; i++) {
		if (i === i.toUpperCase()) {
			answer++
		}
	}
	return answer
}

let str2 = 'KoreaTimeGood'
console.log(solution(str2))

// 풀이 : .toUpperCase()함수는 모두 대문자로 만드는 함수이다. for문을 활용해 반복적으로 확인한다.
// 기존 문자열의 문자와 toUpperCase()를 활용해 기존 문자열에 있는 대문자가 있다면 카운팅 한다.

//solution code 2
//아스키 코드로 해결하는 방법

function solution(s) {
	let answer = 0
	for (let x of s) {
		let num = x.charCodeAt()
		if (num >= 65 && num <= 90) {
			answer++
		}
	}
	return answer
}

let str3 = 'KoreaTimeGood'
console.log(solution(str3))

// 풀이 : 대문자 65 ~ 90 소문자 97 ~ 122가 아스키 코드이다.
// 그래서 num의 모든 아스키 코드 값이 65~ 90사이의 숫자라면 대문자 이기 때문에 카운팅 된다.
